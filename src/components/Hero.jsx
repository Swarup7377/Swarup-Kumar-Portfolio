import { motion } from "framer-motion";
import { useRef,useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github, linkedin } from "../assets";
import Typed from 'typed.js';

const Hero = () => {
  const el=useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['React Developer','Node JS Developer','Python Developer', 'Web Developer'],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };

  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[70px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Swarup</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-80`}>
           and I am a passionate<br/>
          <span className='text-[#915EFF]' ref={el}></span>
          </p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
      <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
  
}

export default Hero