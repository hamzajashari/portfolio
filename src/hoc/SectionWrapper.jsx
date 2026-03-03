import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../style";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = (Component, id) =>
  function HOC() {
    const sectionRef = useRef(null);

    useEffect(() => {
      const el = sectionRef.current;

      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, []);

    return (
      <section
        ref={sectionRef}
        id={id}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component />
      </section>
    );
  };

export default Wrapper;