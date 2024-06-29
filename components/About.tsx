import React from "react";
import { LampDemo } from "@/components/LampEffects";

const About = () => {
  return (
    <main id="about" className="py-5 sm:py-20 lg:pt-[11rem] desktop:pt-[15rem] 2xl:pt-[22rem] px-5 xl:px-14 desktop:px-24 largesceen:px-48 relative z-10 w-full">
      <h2 className="mx-auto block w-full text-5xl 2xl:text-7xl font-prompt font-black bg-gradient-to-r text-center">
        <span className="pr-2 relative z-10 bg-gradient-to-r from-gradient-light to-gradient-dark text-transparent bg-clip-text lg:hidden"> ABOUT ME</span>
        <span className=" pr-2 relative z-10 hidden lg:block"> ABOUT ME</span>
      </h2>

      <h3 className="max-xs:text-sm text-base sm:text-xl lg:text-2xl 2xl:text-4xl font-prompt mx-auto md:w-11/12 lg:w-9/12 mt-6 desktop:mt-14 z-10">
        I’m Ridwan, a passionate Nigerian front-end developer and graphic designer. I specialize in using React, Next.js, and Tailwind CSS to create user-friendly, responsive web applications. For
        graphics, I use Illustrator and Photoshop. <br /> Beyond coding, I enjoy playing chess, watching football, immersing myself in movies and series, listening to music, and diving into
        captivating books. These interests enhance my creativity and technical skills. <br /> As a developer and designer, I create beautiful, functional interfaces. I excel in group settings,
        coordinating closely with project managers, back-end developers, and designers to produce high-quality digital solutions. My attention to detail and problem-solving skills enable me to
        troubleshoot issues and implement effective solutions.
      </h3>
    </main>
  );
};

export default About;
