import React from "react";
import NamoCard from "./NamoCard";
import { serviceCard } from "./common/Helper";
import CommonBtn from "./common/CommonBtn";

const OurService = () => {
  return (
    <div className="bg-[#F1F1F1] py-12 sm:py-16 lg:py-[72px]">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-[#000F02s] text-center">
          Our Range of <span className="text-[#00A015]"> Services</span>
        </h2>
        <div className="flex flex-wrap md:mt-7 -mx-3">
          {serviceCard.map((items, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-4/12 px-3 mt-6">
              <NamoCard items={items} />
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-[42px] flex justify-center">
          <CommonBtn btnName={"View All"} />
        </div>
      </div>
    </div>
  );
};

export default OurService;
