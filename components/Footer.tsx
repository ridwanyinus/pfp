import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full
">
      <div
        className="w-full absolute left-0 -bottom-72 min-h-96 pb-2
">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] ">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p
          className="text-white-200 md:mt-10 my-5 text-center
 ">
          Get in touch with me via social media or email.
        </p>
        <a href="mailto:ridwanyinusa15@gmail.com">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col-reverse justify-between items-center ">
        <p
          className="md:text-base text-sm
 md:font-normal font-light max-lg:mb-1">
          Copyright ©️ 2024 Ridwan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border-black-300 rounded-lg mb-2">
              <img src={profile.img} alt="image profile" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
