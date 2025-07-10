import { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { dinesh_img } from "../assets";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {

  // useEffect(() => {
  //   const message = "Hi, I'm Dinesh. designer.";
  //   const utterance = new window.SpeechSynthesisUtterance(message);
  //   window.speechSynthesis.speak(utterance);
  // }, []);

  return (
    // ...existing code...
    <section className="relative w-full h-screen mx-auto pb-24">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto  ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#ff9500]'>DINESH K</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            UI/UX Designer | Graphics Designer | Video Editer. <br />
            I create user interfaces design, brand identities and logos, and edit engaging reels.
          </p>
          <div className="lg:-mt-20 flex justify-center -bottom-0 ">
            <img
              className="w-[900px] md:w-[900px] lg:w-[900px] h-auto object-contain rounded-xl shadow-lg"
              src={dinesh_img}
              alt="Dinesh K"
            />
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className='absolute top-[790px] md:top-[900] lg:top-[1100px] w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>

  );
};

export default Hero;
