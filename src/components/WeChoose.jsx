import React from "react";
import { weChooseCard } from "./common/Helper";

const WeChoose = () => {
  return (
    <div className="py-12 sm:py-20 lg:py-[152px]">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <div className="flex flex-wrap gap-4 lg:gap-0">
          <div className="w-full lg:w-1/2 lg:pe-3">
            <h2
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="font-medium text-3xl md:text-4xl lg:text-5xl text-[#000F02s]"
            >
              Why Choose
              <span className="text-[#00A015]"> Namo Prime services</span>
            </h2>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="w-full lg:w-1/2 lg:ps-3"
          >
            <p className="font-normal text-base text-[#000F02]/70">
              At Namo Prime, we pride ourselves on delivering unparalleled
              services that go beyond the ordinary. Choosing us means choosing
              excellence, reliability, and a commitment to your satisfaction
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 md:mt-[52px]">
          {weChooseCard.map((items, index) => (
            <div key={index} className="w-full md:w-1/2 md:px-3 mt-4 md:mt-6">
              <div
                data-aos="flip-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="flex gap-5 bg-white hover:shadow-drop_shadow rounded-xl p-4 lg:p-6 duration-300 border border-black/16 hover:border-transparent"
              >
                <span>{items.icon}</span>
                <div className="flex flex-col gap-2">
                  <h2 className="font-medium text-xl md:text-2xl text-[#000F02s]">
                    {items.heading}
                  </h2>
                  <p className="font-medium text-base text-[#000F02]/70">
                    {items.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeChoose;
