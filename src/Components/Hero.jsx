import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const slideVariants = {
  initial: { x: 0 },
  animate: {
    x: "220%",

    transition: {
      duration: 20,
      repeat: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <div
      className="container flex justify-evenly  items-center  ml-16 "
      id="About"
    >
      <motion.div
        className="container1"
        animate="animate"
        initial="initial"
        variants={textVariants}
      >
        <div className="items-center justify-center  ">
          <motion.div
            variants={textVariants}
            className=" font-bold text-blue-700 text-start font-mono text-2xl "
          >
            Arham Wasif
          </motion.div>
          <motion.div variants={textVariants} className="post">
            <label className="text-6xl lg:font-bold text-white  font-normal">
              Frontend
              <span className="block ">Developer</span>
            </label>
          </motion.div>
          <motion.div variants={textVariants} className="">
            <div className="flex mt-4 ">
              <div className="">
                <motion.button
                  variants={textVariants}
                  className="p-2 bg-slate-400 border-2 rounded-md border-white cursor-pointer hover:bg-indigo-200"
                >
                  <Link className="" to="/projects">
                    {" "}
                    My Projects{" "}
                  </Link>{" "}
                  <span></span>
                </motion.button>
              </div>
              <div className="mt-[0.6rem]">
                <motion.a
                  href="/Arham Wasif.pdf" // Replace with the correct path to your resume file
                  download="Arham Wasif"
                  variants={textVariants}
                  className="p-2  bg-white border-2 rounded-md border-white cursor-pointer gap-2 ml-2 mt-4  hover:bg-indigo-300"
                >
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div className="hero">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              className="w-10 mt-2"
              alt=""
              src="/scroll.png"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="hidden sm:block">
        <img className="ml-20 mb-4 w-[25rem] h-[30rem]" src="/own.png" />
      </div>
      <motion.div
        className="slider"
        animate="animate"
        variants={slideVariants}
        initial="initial"
      ></motion.div>

      <div className="hero"></div>
    </div>
  );
};

export default Hero;
