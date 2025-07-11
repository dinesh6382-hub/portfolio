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
      <div className=" xs:mt-2 lg:mt-1" >
        <h2 className={`${styles.sectionHeadText} p-5`} >Tools</h2>
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
        <div className=" xs:mt-2 lg:mt-20" id="skills" >
          <h2 className={`${styles.sectionHeadText} p-5`} > Skills</h2>
          <div className="">
            <div className=" xs:-mt-2 lg:-mt-8" >
              <h2 className={`${styles.projectSubText}  p-5`} >UI/UX ...</h2>
            </div>
            <p className="mx-10 text-[17px] text-[#d1d2f3cf] -mt-3 lg:leading-[28px]" >
              User Experience Design,
              Design Process,
              Problem Statement,
              Competitive Analysis,
              Empathy Map,
              User Flow & Information Architecture,
              Wireframing & Prototyping,
              Laws of UX,
              User Interface Design,
              Usability testing,
              Team Collaboration & Communication.
            </p>
          </div>
          <div className="">
            <div className=" xs:mt-10 lg:mt-2" >
              <h2 className={`${styles.projectSubText}  p-5`} >Graphic Design ...</h2>
            </div>
            <p className="mx-10 text-[17px] text-[#d1d2f3cf] -mt-3 lg:leading-[28px]" >
             Poster Design,
              Banner Design,
              Logo,
              Thumbnail Design, 
               Branding Knowledge,
              Mockups,
              Creativity,
              Typography,
              Color Theory,
               Layout & Composition, 
                Time Management.
            </p>
          </div>
           <div className="">
            <div className=" xs:mt-10 lg:mt-2" >
              <h2 className={`${styles.projectSubText}  p-5`} >Video Editing ...</h2>
            </div>
            <p className="mx-10 text-[17px] text-[#d1d2f3cf] -mt-3 lg:leading-[28px]" >
             Video Editing Basics,
              Timeline Management,
               Transitions & Effects,
                Color Correction & Grading,
                 Masking, Audio Editing, 
                 Text & Titles,
                  Keyframing & Animation,
                   Youtube Video Edit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Tech, "")