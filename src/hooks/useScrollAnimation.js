import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * A reusable hook that animates a set of elements on scroll.
 *
 * @param {string} selector - CSS selector for the elements to animate (scoped to containerRef).
 * @param {object} fromVars - GSAP "from" properties (e.g., { opacity: 0, y: 50 }).
 * @param {object} scrollTriggerOptions - ScrollTrigger options (e.g., { start: "top 85%" }).
 * @param {object} tweenOptions - Additional GSAP tween options (e.g., { duration: 1, stagger: 0.2 }).
 * @returns {{ containerRef }} - A ref to attach to the container element.
 */
export const useScrollAnimation = (
  selector,
  fromVars = {},
  scrollTriggerOptions = {},
  tweenOptions = {}
) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(selector, containerRef.current);
      if (!elements.length) return;

      gsap.from(elements, {
        scrollTrigger: {
          trigger: elements[0],
          start: "top 85%",
          ...scrollTriggerOptions,
        },
        opacity: 0,
        ...fromVars,
        ease: tweenOptions.ease || "power3.out",
        duration: tweenOptions.duration || 0.9,
        stagger: tweenOptions.stagger || 0.15,
      });
    },
    { scope: containerRef }
  );

  return { containerRef };
};

/**
 * A reusable hook that runs multiple GSAP animations inside a single scoped container.
 *
 * @param {function} animationFn - A callback (containerRef) => void that runs GSAP animations.
 * @returns {{ containerRef }}
 */
export const useAnimations = (animationFn) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        animationFn(containerRef.current);
      }
    },
    { scope: containerRef }
  );

  return { containerRef };
};
