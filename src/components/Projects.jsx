import Masonry from "react-masonry-css";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
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
    </motion.div>
  );
};

const Projects = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    1000: 2,
    600: 1
  };

  return (
    <div>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
      </div>
      <div>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-8"
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
