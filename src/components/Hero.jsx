import { motion } from "framer-motion";
import { styles } from "../styles";
import { dinesh_img } from "../assets";

const Hero = () => {



  return (
    // ...existing code...
    <section className="relative w-full h-screen mx-auto pb-24 ">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto  ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-90 h-40 violet-gradient' />
        </div>
        <div className="mt-18 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#ff9500]'>DINESH K</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className='text-[#ff9500] text-600 '> UI/UX Designer | Graphics Designer | Video Editer.</span> <br />
            <span className="text-[#a0a4ba]" > I create user interfaces design, brand identities and logos, and edit engaging reels.</span>
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
    </section>

  );
};

export default Hero;
