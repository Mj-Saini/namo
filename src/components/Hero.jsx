import React from "react";
import CommonBtn from "./common/CommonBtn";
import heroImg from "../assets/Image/webp/hero-mobile-img.webp";
import CountsUp from "./CountsUp";
import waveHero from "../assets/Image/svg/hero-wave-img.svg";

const Hero = () => {
  return (
    <div className="relative">
      <img
        className="absolute lg:bottom-[9%] lg:left-0 -left-1/2 sm:bottom-1/2  max-lg:-translate-y-1/2  z-0"
        src={waveHero}
        alt="wave"
      />
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-[1]">
        <div className="flex flex-col-reverse lg:flex-row items-center mt-2">
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <h1 className="font-bold text-3xl sm:text-5xl lg:text-[52px] xl:text-[59px] text-[#000F02]">
              Your <span className="text-[#00A015]"> One-Stop </span> Solution
              for Services
            </h1>
            <p className="font-normal text-base text-[#000F02] mt-2 md:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              efficitur feugiat ultrices. Vivamus aliquet consequat tortor quis
              posuere. Nullam molestie vulputate dolor vel ultrices. Etiam ac
              justo arcu.
            </p>
            <div className="mt-4 md:mt-10">
              <CommonBtn btnName="Find Out More" />
            </div>
          </div>
          <div className="w-4/5 sm:w-1/2 lg:w-1/2">
            <div className="lg:pe-12">
              <img className="w-full" src={heroImg} alt="mobile" />
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <CountsUp />
        </div>
      </div>
    </div>
  );
};

export default Hero;
