"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { styles } from "../style";


const ServiceCard = ({ index, title, icon }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full xs:w-[250px]">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden">
        <motion.img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  </motion.div>
)


const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
     <div ref={sectionRef} className="pt-[20px] md:pt-0 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="mt-10 flex flex-wrap gap-5 justify-center">
            <motion.button
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/hamzajashari",
                  "_blank",
                )
              }
            >
              LinkedIn
            </motion.button>

            <motion.button
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-[0_5px_0_0_rgba(0,0,0,0.6)] transition-all duration-100 ease-in-out hover:shadow-[0_3px_0_0_rgba(0,0,0,0.6)] hover:translate-y-[2px] active:translate-y-1 active:shadow-none select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://github.com/hamzajashari", "_blank")
              }
            >
              GitHub
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-full md:w-2/3"
        >
          <motion.ul
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl space-y-6 list-none"
          >
            <motion.li
              className="flex items-start"
              variants={fadeIn("up", "spring", 0.1, 0.75)}
            >
              <span className="mr-4 text-2xl flex-shrink-0">👨‍💻</span>
              <span>
                I’m a Senior Software Engineer with 5+ years of experience
                building enterprise-grade systems using .NET, Angular, and SQL
                Server.
              </span>
            </motion.li>

            <motion.li
              className="flex items-start"
              variants={fadeIn("up", "spring", 0.2, 0.75)}
            >
              <span className="mr-4 text-2xl flex-shrink-0">🏢</span>
              <span>
                Currently working at EVN, where I design and maintain full-stack
                applications, manage CI/CD pipelines in Azure DevOps, and handle
                production deployments across on-prem and cloud environments.
              </span>
            </motion.li>

            <motion.li
              className="flex items-start"
              variants={fadeIn("up", "spring", 0.3, 0.75)}
            >
              <span className="mr-4 text-2xl flex-shrink-0">☁️</span>
              <span>
                Experienced in Azure cloud solutions, including Azure AD (OAuth
                2.0), Azure Functions, Service Bus, and event-driven
                architectures for scalable background processing.
              </span>
            </motion.li>

            <motion.li
              className="flex items-start"
              variants={fadeIn("up", "spring", 0.4, 0.75)}
            >
              <span className="mr-4 text-2xl flex-shrink-0">🚀</span>
              <span>
                I own deployments end-to-end — from Dockerized Angular apps with
                Nginx reverse proxy to .NET applications hosted on IIS and SQL
                Server instances on virtual machines.
              </span>
            </motion.li>

            <motion.li
              className="flex items-start"
              variants={fadeIn("up", "spring", 0.5, 0.75)}
            >
              <span className="mr-4 text-2xl flex-shrink-0">⚙️</span>
              <span>
                Passionate about DevOps, automation, and building reliable
                systems that optimize workflows, integrate external APIs, and
                deliver real-time capabilities with SignalR.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
