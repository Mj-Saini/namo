import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Image/svg/Logo.svg";
import { linkTabs } from "./Helper";
import CommonBtn from "./CommonBtn";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  if (navbar) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="py-3 bg-white">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <div className="flex justify-between items-center">
          <span className=" w-24 md:w-[122px] h-[30px]">
            <Link to="/" className="inline-block">
              <img src={logo} alt="logo" />
            </Link>
          </span>
          <div
            className={`flex flex-col md:flex-row justify-center gap-3 lg:gap-4 items-center duration-300 max_md:fixed max_md:h-screen max_md:w-screen top-0 ${
              !navbar ? "-left-full" : "left-0 bg-white"
            }`}
          >
            {linkTabs.map((obj, index) => (
              <Link
                onClick={() => {
                  setNavbar(false);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                key={index}
                to={obj.path}
                className="font-normal text-[#000F02] text-base leading-6 hover:text-[#00A015] duration-300 capitalize"
              >
                {obj.tabs}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            {" "}
            <CommonBtn btnName="Book Now" />
            <div
              onClick={() => {
                setNavbar(!navbar);
              }}
              className="flex flex-col justify-between h-5 w-6 lg:hidden z-[100] relative cursor-pointer group duration-300"
            >
              <span
                className={` border-[3px] border-black group-hover:border-greenCyan w-full rounded-sm duration-300 ${
                  navbar ? "translate-y-[7px] -rotate-45" : ""
                }`}
              ></span>
              <span
                className={` border-[3px] border-black group-hover:border-greenCyan w-full rounded-sm duration-300 ${
                  navbar ? "rotate-45 mb-[1px]" : ""
                }`}
              ></span>
              <span
                className={` border-[3px] border-black group-hover:border-greenCyan w-full rounded-sm duration-300 ${
                  navbar ? "opacity-0" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
