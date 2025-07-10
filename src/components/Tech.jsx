import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div  className=" xs:mt-2 lg:mt-1" >
        <h2 className={`${styles.sectionHeadText } p-5`} >Tools</h2>
      </div>
      <section>
        <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-29 h-28" key={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                className="tech-icon w-full h-full object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Tech, "");