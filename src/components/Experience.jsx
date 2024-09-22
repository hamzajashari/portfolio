import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <motion.div var={textVariant()}>
        <p className={styles.sectionSubText}>What have i done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        {experiences.map((experience, index) => {
          return <ExperienceCard key={index} experience={experience} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
