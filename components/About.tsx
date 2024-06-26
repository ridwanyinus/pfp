"use client";
import React, { useState } from "react";
import { Meteors } from "./ui/Meteors";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import chart from "@/public/chart.png";
import chart1 from "@/public/chart1.png";

const About = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "ridwanyinusa15@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <main id="about" className="pt-5 lg:pt-10 xl:pt-24 desktop:pt-36 largesceen:pt-48  px-5 xl:px-14 desktop:px-24 largesceen:px-48 relative z-10 w-full h-full pb-20">
      <h2 className="mx-auto block w-full text-5xl 2xl:text-7xl font-prompt font-black bg-gradient-to-r text-center">
        <span className="pr-2 relative z-10 bg-gradient-to-r from-gradient-light to-gradient-dark text-transparent bg-clip-text lg:hidden"> ABOUT ME</span>
        <span className=" pr-2 relative z-10 hidden lg:block"> ABOUT ME</span>
      </h2>
      <section className="flex flex-col justify-between md:items-center xl:items-start md:flex-row mt-6 lg:mt-28 max-lg:gap-y-10">
        <div className="md:w-[60%] lg:w-1/2 2xl:w-[60%]">
          <h3 className="max-xs:text-sm text-base sm:text-xl lg:text-2xl 2xl:text-4xl font-prompt mx-auto z-10">
            I’m Ridwan, a passionate Nigerian front-end developer and graphic designer. I use React, Next.js, and Tailwind CSS to create user-friendly, responsive web applications. For graphics, I use
            Illustrator and Photoshop. <br /> Beyond coding, I enjoy playing chess, watching football, immersing myself in movies and series, listening to music, and diving into captivating books.
            These interests enhance my creativity and technical skills. <br /> As a developer and designer, I create beautiful, functional interfaces. I excel in group settings, coordinating closely
            with project managers, back-end developers, and designers to produce high-quality digital solutions. My attention to detail and problem-solving skills enable me to troubleshoot issues and
            implement effective solutions.
          </h3>
        </div>

        <div className="relative w-full small:w-[95%]  md:w-auto  desktop:w-[27rem]">
          <div className="absolute inset-0" />
          <div className="relative shadow-xl bg-custom-gradient border border-white/[0.1] md:px-2  lg:px-8  overflow-hidden rounded-3xl flex flex-col justify-end items-start px-2 xs:px-6 py-6 small:py-12 md:py-8 lg:py-12 desktop:py-16 2xl:py-24">
            <h1 className="font-bold font-outfit text-lg xs:text-[1.4rem] small:text-3xl medium:text-xl lg:text-2xl 2xl:text-3xl text-white mb-8 relative z-50 ">
              <span className="pr-1"> Front-End Developer</span> | <br /> Graphics Designer
            </h1>

            <p className="font-normal font-outfit text-xs xs:text-[0.8rem] small:text-base md:text-[13px] lg:text-base desktop:text-lg 2xl:text-xl  text-slate-400 mb-4 relative z-50">
              <span className="pr-4 w-[60px]  md:w-[60px] lg:w-[108px] inline-flex">Birthday</span> : Dec 05
            </p>

            <p className="font-normal font-outfit text-xs xs:text-[0.8rem] small:text-base md:text-[13px] lg:text-base desktop:text-lg 2xl:text-xl  text-slate-400 mb-4 relative z-50">
              <span className="pr-4 w-[60px] md:w-[60px] lg:w-[108px] inline-flex">Phone</span> : +(234) 8166319747
            </p>

            <p className="font-normal font-outfit text-xs xs:text-[0.8rem] small:text-base md:text-[13px] lg:text-base desktop:text-lg 2xl:text-xl  text-slate-400 mb-4 relative z-50">
              <span className="pr-4 w-[60px] md:w-[60px] lg:w-[108px] inline-flex">Email</span> : ridwanyinusa15@gmail.com
            </p>

            <p className="font-normal font-outfit text-xs xs:text-[0.8rem] small:text-base md:text-[13px] lg:text-base desktop:text-lg 2xl:text-xl  text-slate-400 mb-4 relative z-50">
              <span className="pr-4 w-[60px] md:w-[60px] lg:w-[108px] inline-flex">From</span> : Lagos, Nigeria
            </p>

            <p className="font-normal font-outfit text-xs xs:text-[0.8rem] small:text-base  md:text-[13px] lg:text-base desktop:text-lg 2xl:text-xl  text-slate-400 mb-4 relative z-50">
              <span className="pr-4 w-[60px] md:w-[60px] lg:w-[108px] inline-flex">Language</span> : English, Yoruba, Hausa
            </p>

            <p className="font-normal font-outfit text-xs xs:text-[0.8rem] small:text-base md:text-[13px] lg:text-base desktop:text-lg 2xl:text-xl  text-slate-400 mb-2 lg:mb-4 relative z-50">
              <span className="pr-4 w-[60px] md:w-[60px] lg:w-[108px] inline-flex">Freelance</span> : Available
            </p>

            <div className="relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton title={copied ? "Email is Copied!" : "Copy my email address"} icon={<IoCopyOutline />} position="left" handleClick={handleCopy} />
            </div>

            <Meteors number={25} />
          </div>
        </div>
      </section>

      <div className="mt-24 max-lg:gap-12 flex flex-col justify-center max-lg:text-center lg:flex-row  lg:justify-between  w-full items-center">
        <div className="flex flex-col gap-4  lg:w-1/3 ">
          <h2 className="font-outfit text-4xl text-purple mb-4 font-medium">Part Programmer</h2>
          <p className="font-poppins text-lg">Front-end development </p>
          <p className="font-poppins text-lg"> HTML | CSS </p>
          <p className="font-poppins text-lg">JavaScript &gt; Tsx &gt; Jsx </p>
          <p className="font-poppins text-lg">React.js | Next.js </p>
        </div>

        <div className="lg:w-1/3 w-auto max-lg:order-1">
          <Image alt="chart" src={chart1} quality={100} />
        </div>

        <div className="flex flex-col gap-4 lg:w-1/3 lg:pl-16 xl:pl-28 desktop:pl-36 2xl:pl-48">
          <h2 className="font-outfit text-4xl text-purple mb-4 font-medium">Part Designer</h2>
          <p className="font-poppins text-lg">Logo Design</p>
          <p className="font-poppins text-lg">Branding </p>
          <p className="font-poppins text-lg">Flyer Design </p>
          <p className="font-poppins text-lg">Interaction Design</p>
        </div>
      </div>
    </main>
  );
};

export default About;
