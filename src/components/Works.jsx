import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, graphic } from "../constants";
import { p } from "maath/dist/misc-7d870b3c.esm";


gsap.registerPlugin(ScrollTrigger);


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,

}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover object-left rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {/* Live Demo Link */}
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="bg-blue-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Live Demo"
              >
                <span className="text-white text-xs font-bold">Live</span>
              </div>
            )}

            {/* GitHub Link */}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {


  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <>
      <section id="work" className="-mt-10">
        <div >
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>

        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-6xl leading-[30px]">
            I worked on creating easy-to-use and visually appealing app and website screens. I focused on making the designs simple, clean, and user-friendly, so people can use them without confusion. Sometimes, I also create posters, logos, and social media posts using creative colors and layouts. My goal is to make the designs look attractive and match the brand's style.
          </p>
        </div>
        <div className=" xs:mt-2 lg:mt-1" >
          <h2 className={`${styles.projectSubText} p-5 mt-10`} >UI/UX ...</h2>
        </div>
        <div className="works-container mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
          {projects.map((project, index) => (
            <div key={`project-${index}`} className="project-card">
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </div>
        <div className=" xs:mt-2 lg:mt-1" >
          <h2 className={`${styles.projectSubText} p-5 mt-10`} >Graphics Design (Social Media Posters)</h2>
        </div>
        <div className="works-container mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 gap-x-20">
          {graphic.map((content, i) => (
            <div
              key={`graphic-${i}`}
              className="bg-tertiary p-4 rounded-2xl sm:w-[340px] flex flex-col items-center shadow-lg"
            >
              <div  className="w-full h-[430px] sm:h-[340px] flex items-center justify-center mb-4">
                <img
                  src={content.image}
                  alt={content.name}
                  className="w-full object-cover rounded-2xl cursor-pointer"
                  onClick={() => window.open(content.image)}
                />
              </div>
              <h3 className="text-white font-bold text-[20px] text-center">{content.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Works, "");
