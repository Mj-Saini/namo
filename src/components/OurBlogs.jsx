import React from "react";
import CommonBtn from "./common/CommonBtn";
import { blogPostData } from "./common/Helper";

const OurBlogs = () => {
  return (
    <div className="pb-12 md:pb-16 pt-24 lg:py-[152px]">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-[#000F02s] text-center">
          Our Blog
        </h2>
        {blogPostData.map((obj, index) => (
          <div key={index} className="flex flex-wrap mt-6 md:mt-[52px]">
            <div
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="w-full lg:w-1/2 lg:pe-3"
            >
              <img className="w-full" src={obj.mainImg} alt="blog-img" />
              <div className="mt-2 md:mt-4 lg:mt-8">
                <span className="text-sm font-normal text-[#00A015]">
                  {obj.date}
                </span>
                <h2 className="font-medium text-xl lg:text-2xl text-[#161616] leading-6 mt-1">
                  {obj.heading}
                </h2>
                <p className="font-normal text-base text-[#85888C] mt-1 lg:mt-4">
                  {obj.description}
                </p>
                <div className="mt-3 lg:mt-6">
                  <CommonBtn btnName={"Read more"} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-3 mt-8 lg:mt-0">
              {obj.suggestions.map((items, index) => (
                <div key={index} className={`flex ${index >= 1 ? "mt-5" : ""}`}>
                  <div className="w-1/3 md:w-1/4 lg:w-1/2 pe-2">
                    <div className="flex h-full">
                      <img
                        data-aos="fade-zoom-in"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        className="w-full object-cover rounded-xl"
                        src={items.img}
                        alt="blog-img"
                      />
                    </div>
                  </div>
                  <div className="w-2/3 lg:w-1/2">
                    <div className="flex flex-col justify-center h-full">
                      <span className="text-sm font-normal text-[#00A015]">
                        {items.date}
                      </span>
                      <h2 className="font-medium text-lg lg:text-xl text-[#161616] line-clamp-1 sm:line-clamp-2">
                        {items.heading}
                      </h2>
                      <p className="font-normal text-base text-[#85888C] lg:mt-2 line-clamp-2 lg:line-clamp-3">
                        {items.description}
                      </p>
                      <a
                        href="/"
                        className="font-medium text-lg text-[#00A015] lg:mt-6"
                      >
                        Read more...
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlogs;
