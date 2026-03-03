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
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-tertiary rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 break-inside-avoid mb-4"
    >
      {image != null && (
        <div className="relative w-full overflow-hidden">
          <img
            src={image}
            alt="project_image"
            className="w-full h-auto object-cover"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-125 transition-transform"
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
      <div className="p-4">
        <h3 className="text-white font-bold text-[18px] line-clamp-2">{name}</h3>
        <p className="mt-2 text-secondary text-[13px] line-clamp-3">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
