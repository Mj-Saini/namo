/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import appleStore from "../assets/Image/svg/app-store.svg";
import googlePlay from "../assets/Image/svg/google-play.svg";
import waveImg from "../assets/Image/svg/second-wave.svg";

const YourExperince = () => {
  return (
    <>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-[1] overflow-hidden translate-y-[90px] sm:translate-y-[110px] lg:translate-y-[160px]">
        <img className="absolute top-0" src={waveImg} alt="wave" />
        <div className="flex justify-center rounded-3xl bg-[#00A015] py-10 md:py-16 lg:py-[100px]">
          <div className="w-full sm:w-3/4 md:w-1/2 px-6 sm:px-0">
            <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-white lg:!leading-[52px] text-center capitalize">
              Enhance Your Experience with Our Mobile App
            </h2>
            <div className="flex gap-5 mt-6 md:mt-[42px] justify-center relative z-[2]">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={googlePlay} alt="google-store" />
              </a>
              <a href="https://www.apple.com/" target="_blank" rel="noreferrer">
                <img src={appleStore} alt="apple-store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourExperince;
