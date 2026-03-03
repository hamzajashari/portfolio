import Masonry from "react-masonry-css";
import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../style";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { useAnimations } from "../hooks/useScrollAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        {image != null && (
          <div className="relative w-full h-[230px] mb-5">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            {source_code_link && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={link}
                    alt="link"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Projects = () => {
  const { containerRef } = useAnimations(() => {
    gsap.from(".project-header", {
      scrollTrigger: { trigger: ".project-header", start: "top 85%" },
      y: 30, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2,
    });
    gsap.from(".project-card-container", {
      scrollTrigger: { trigger: ".project-card-container", start: "top 85%" },
      scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)", stagger: 0.1,
    });
  });

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    1000: 2,
    600: 1
  };

  return (
    <div ref={containerRef}>
      <div className="project-header">
        <p className={`${styles.sectionSubText} `}>My work</p>
      </div>
      <div className="project-header">
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-8 project-card-container"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="masonry-item">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
