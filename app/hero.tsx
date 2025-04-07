"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="font-shooting md:min-h-[1000px] max-h-[750px] md:max-h-auto h-dvh relative md:top-[70px] top-[15px]">
      <nav className="flex z-50 justify-between items-center py-[20px] md:-top-[70px] -top-[15px] relative lg:px-[50px] px-5 lg:mb-[150px] mb-[103px]">
        <div className="flex relative lg:text-[27px] text-[14.4px] font-shooting gap-[7px] items-center leading-normal">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={96}
            height={85}
            className="relative top-[-5px] w-[50px] h-[44px] md:w-[96px] md:h-[85px]"
          />
          <span>SHRO</span>
        </div>
        <ul className="md:flex items-center hidden gap-[84px] lg:text-[22px] text-[16px] text-[#F2F2F2]">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#community">Join Community</Link>
          </li>
        </ul>

        <div className="md:hidden relative">
          <button
            className="flex items-center"
            id="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M0 0.795454H18V2.79545H0V0.795454ZM6 7.79545H18V9.79545H6V7.79545ZM0 14.7955H18V16.7955H0V14.7955Z"
                fill="white"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <motion.div
              className="absolute right-0 mt-2 w-48 bg-[#1A1A1A] px-3 rounded-md shadow-lg py-2 z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="#about"
                  className="block cursor-pointer px-4 py-2 text-white hover:bg-[#2D2D2D]"
                >
                  About
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="#community"
                  className="block px-4 py-2 text-white hover:bg-[#2D2D2D]"
                >
                  Join Community
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="#"
                  className="block px-4 py-2 text-[#FFC04A] hover:bg-[#586A9C]/90 rounded-full mt-3 text-center bg-[#586A9C]"
                >
                  Buy $SHRO
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>

        <button className="lg:px-[55.5px] lg:py-[20px] px-[35px] py-[16px]  md:inline hidden cursor-pointer bg-black text-white rounded-full font-bold text-[22px] active:scale-90 transition duration-300 ease-in-out">
          Buy <span className="text-[#FFC04A]">$SHRO</span>
        </button>
      </nav>
      <div className="lg:text-[362px] md:text-[250px]  text-[118px] isolate w-full max-w-[1458px] mx-auto relative text-shadow text-[#FFC04A] font-shooting uppercase text-center leading-[196px]">
        {Array.from("schro").map((char, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              scale: 0.3,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: "spring",
              stiffness: 60,
              damping: 12,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
        <motion.div
          className="absolute md:-top-[90%] -top-[60%] lg:left-[5%] -left-[15%]   -z-10"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            alt="star"
            src="/star.svg"
            width={299}
            height={209}
            className="w-[209px] h-[209px] lg:w-[299px] lg:h-[209px]"
          />
        </motion.div>
        <motion.div
          className="absolute -bottom-[90%] right-[20%] -z-10"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            alt="star"
            src="/star.svg"
            width={299}
            height={99}
            className="w-[69px] h-[53px] lg:w-[299px] lg:h-[209px] hidden md:block"
          />
        </motion.div>

        <motion.div
          className="absolute lg:-top-[40%] bottom-[20%] right-[20%] lg:right-[7%] z-20"
          initial={{
            scale: 0.3,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,

            ease: "linear",
          }}
        >
          <Image
            alt="star"
            src="/shiro-coin2.svg"
            width={299}
            height={99}
            className="w-[69px] h-[53px] lg:w-[299px] lg:h-[99px]"
          />
        </motion.div>

        <motion.div
          className="absolute z-20 lg:-bottom-[70%] lg:-left-[5%]  -bottom-[100%] -left-[10%]"
          initial={{
            scale: 0.3,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "linear",
          }}
        >
          <Image
            alt="star"
            src="/shiro-coin.svg"
            width={299}
            height={99}
            className="w-[109px] h-[85px] lg:w-[299px] lg:h-[139px]"
          />
        </motion.div>
      </div>
      <motion.div
        className="bottom-0 absolute w-full flex items-center justify-center"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        <Image
          alt="teddy"
          src={"/teddy.svg"}
          width={1920}
          height={1080}
          className="lg:w-[653px] md:w-[503px] hidden md:inline aspect-square w-full"
        />
        <Image
          alt="teddy"
          src={"/teddym.svg"}
          width={1920}
          height={1080}
          className="lg:w-[653px] md:w-[503px] md:hidden aspect-square w-full"
        />

        <motion.div
          className="absolute  bottom-[100px] lg:bottom-16 lg:right-[20%] right-[10%] z-20"
          initial={{
            scale: 0.3,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,

            ease: "linear",
          }}
        >
          <Image
            alt="star"
            src="/shiro-coin.svg"
            width={299}
            height={99}
            className="w-[69px] h-[53px] lg:w-[299px] lg:h-[149px]"
          />
        </motion.div>
      </motion.div>
      <div className="absolute bottom-12 flex gap-[8.3px]  pb-[36px] md:gap-[33px] justify-center w-full md:justify-end px-[58px] z-20">
        <a href="#">
          <Image
            alt="star"
            src="/x-twitter.svg"
            width={299}
            height={99}
            className="md:w-[98px] md:h-[98px] h-[54px] w-[54px] hover:rotate-90 active:scale-90 duration-750 transition ease-in-out"
          />
        </a>
        <a href="#">
          <Image
            alt="star"
            src="/tg.svg"
            width={98}
            height={98}
            className="md:w-[98px] md:h-[98px] h-[54px] w-[54px] hover:rotate-90 active:scale-90 duration-750 transition ease-in-out"
          />
        </a>
      </div>
    </div>
  );
}

export const Sliding = () => {
  return (
    <div className="w-full lg:h-[150px] h-[53px] relative  bg-[#586A9C]  z-30 font-shooting text-[66px] flex  items-center justify-center overflow-hidden">
      <motion.div
        className="flex items-center lg:gap-[200px] gap-[100px]  w-full"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="lg:text-[66.5px] text-[23.61px] leading-[100%]">
                SCHRO
              </span>
              <Image
                alt="cat"
                src="/shiro-coin.svg"
                width={200}
                height={200}
                className="md:w-[151px] md:h-[151px] w-[53px]  h-[53px]"
              />
            </div>
          ))}
      </motion.div>
    </div>
  );
};
