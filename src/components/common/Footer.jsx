import React from "react";
import footerLogo from "../../assets/Image/svg/footer-logo.svg";
import { linkTabs } from "./Helper";
import { Link } from "react-router-dom";
import { FbIcon, InstaIcon, LinkdinIcon } from "./Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#000F02] pt-[150px] sm:pt-[180px] lg:pt-[246px]">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <div className="flex justify-center pb-14 md:pb-20 border-b-2 border-[#00A015]">
          <div className="w-full md:w-9/12 lg:w-6/12">
            <div className="flex flex-col items-center justify-center gap-4">
              <img src={footerLogo} alt="logo" />
              <p className="font-normal text-base text-white text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eu enim nibh. Aliquam tincidunt leo non massa
                facilisis
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                {linkTabs.map((obj, index) => (
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    key={index}
                    to={obj.path}
                    className="font-normal text-white text-base leading-6 hover:text-[#00A015] duration-300 capitalize"
                  >
                    {obj.tabs}
                  </Link>
                ))}
              </div>
              <div className="flex gap-3 mt-2">
                <InstaIcon />
                <FbIcon />
                <LinkdinIcon />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center font-normal text-[#FEFEFE]/80 text-sm capitalize py-6 ">
          ©{currentYear} Namo Prime Services, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
