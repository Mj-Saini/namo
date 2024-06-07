import React from "react";
import CommonBtn from "./common/CommonBtn";
import uniqueSellingImg from "../assets/Image/webp/unique-selling-img.webp";

const UniqueSelling = () => {
  return (
    <div className="py-12 sm:py-20 lg:py-[152px]">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-0 items-center lg:-mx-4">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="w-full sm:w-8/12 lg:w-1/2 lg:pe-4"
          >
            <img src={uniqueSellingImg} alt="selling-img" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="w-full lg:w-1/2 lg:ps-4"
          >
            <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-[#000F02s]">
              Unique Selling <span className="text-[#00A015]">Proposition</span>
            </h2>
            <p className="font-normal text-base text-[#000F02] mt-3 lg:mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              purus eleifend, sollicitudin tortor id, eleifend ante. Nam
              tincidunt ipsum pellentesque viverra facilisis. Suspendisse id
              lacus et mauris luctus lobortis. Curabitur libero nibh, dictum eu
              neque et, pharetra placerat diam. Ut vulputate magna et felis
              sodales facilisis. Praesent est arcu, egestas blandit tincidunt
              ac, gravida et quam.
            </p>
            <div className="mt-6 lg:mt-[42px]">
              <CommonBtn btnName={"Read More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSelling;
