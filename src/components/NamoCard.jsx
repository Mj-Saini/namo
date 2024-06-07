import React from "react";

const NamoCard = ({ items }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      className="flex flex-col items-center justify-center border border-black/15 rounded-xl px-6 pt-6 pb-14 h-full hover:bg-[#F1F1F1] hover:shadow-drop_shadow hover:border-transparent duration-300"
    >
      <span>{items.icon}</span>
      <h2 className="font-medium text-xl lg:text-2xl text-black mt-4">
        {items.heading}
      </h2>
      <p className="font-normal text-base text-[#000F02]/70 text-center pt-3 leading-6">
        {items.description}
      </p>
    </div>
  );
};

export default NamoCard;
