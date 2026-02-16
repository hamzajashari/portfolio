import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../style";
import { services, introduction } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.from(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%"
      },
      y: 50,
      opacity: 0,
      scale: 0.8,
      duration: 2,
      ease: "power3.out",
    });
  }, []);
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        {introduction}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
