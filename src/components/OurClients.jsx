import React from "react";
import Slider from "react-slick";
import { StarIcon } from "./common/Icons";
import quoteImg from "../assets/Image//png//quote-img.png";
import { OurClientCard } from "./common/Helper";

const OurClients = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-[#000F02s] text-center">
          Our
          <span className="text-[#00A015]"> Clients </span>Say
        </h2>
        <div className="-mx-3">
          <Slider {...settings}>
            {OurClientCard.map((obj, index) => (
              <div key={index} className="px-2 lg:px-3">
                <div className="bg-[#F1F1F1] border border-black/15 rounded-xl px-6 py-6 mt-6 lg:mt-[52px] hover:bg-[#F1F1F1] hover:shadow-drop_shadow">
                  <div className="flex items-center gap-3 relative">
                    <img
                      className="absolute right-0 w-10 h-8 top-1/2 -translate-y-1/2 opacity-25"
                      src={quoteImg}
                      alt="double-quote"
                    />
                    <img
                      className="w-12 md:w-16 h-12 md:h-16"
                      src={obj.img}
                      alt="client-img"
                    />
                    <h2 className="font-medium text-xl md:text-2xl text-[#161616]">
                      {obj.fname} <span className="block">{obj.lname}</span>
                    </h2>
                  </div>
                  <p className="font-normal text-base text-[#85888C] mt-2 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean molestie cursus sem non eleifend. Praesent vitae
                    commodo nunc, at suscipit nibh. Aliquam ut lorem quis lectus
                    varius placerat eu non felis.
                  </p>
                  <span className="flex gap-1 items-center">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
