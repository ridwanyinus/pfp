import Image from "next/image";
import React from "react";
import html from "@/public/html-5.svg";

const TechStack = () => {
  return (
    <main className="py-20">
      <h2 className="mx-auto block w-full text-5xl 2xl:text-7xl font-prompt font-black bg-gradient-to-r text-center">
        <span className="pr-2 relative z-10 bg-gradient-to-r from-gradient-light to-gradient-dark text-transparent bg-clip-text lg:hidden mb-8">MY TECH STACKS & TOOLS</span>
        <span className=" pr-2 relative z-10 hidden lg:block"> WHAT I DO</span>
      </h2>
      <section>
        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] w-48 h-full rounded-xl flex flex-col items-center py-8">
          <div className="bg-white rounded-full  px-5 py-3 w-fit">
            <Image src={html} alt="html" className="w-10" />
          </div>
          <p className="text-white text-lg mt-6 font-poppins font-bold">HTML</p>
        </div>
      </section>
    </main>
  );
};

export default TechStack;
