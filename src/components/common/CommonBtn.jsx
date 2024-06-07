import React from "react";

const CommonBtn = ({ btnName }) => {
  return (
    <div>
      <button className="font-medium text-base md:text-lg text-[#F1F1F1] py-1.5 sm:py-2 lg:py-4 px-3 sm:px-6 lg:px-8 bg-[#00A015] rounded-[60px] border border-[#00A015] hover:bg-transparent hover:text-[#00A015] duration-300">
        {btnName}
      </button>
    </div>
  );
};

export default CommonBtn;
