import React, { useState } from "react";
import contactImg from "../assets/Image/png/contact-us-img.png";
import { contactUsData } from "./common/Helper";
import CommonBtn from "./common/CommonBtn";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    mob: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      fname: "",
      lname: "",
      email: "",
      mob: "",
      message: "",
    });
  };

  return (
    <div className="py-12 md:py-20 lg:py-32 bg-[#F1F1F1]">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-1/2 lg:pe-4">
            <div className="h-full flex flex-col justify-center">
              <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl text-[#000F02s]">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2 pt-2">
                  {contactUsData.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className="max_500:w-full w-1/2 px-2 mt-4"
                      >
                        <div className="flex flex-col gap-1.5">
                          <label
                            className="font-normal text-base text-[#000F02] capitalize"
                            htmlFor="fname"
                          >
                            {items.inputName}
                          </label>
                          <input
                            className="text-[#000F02] placeholder:text-[#000F02]/70 font-normal text-sm py-3 px-3 border border-black/16 outline-none bg-white rounded-lg"
                            required
                            type={items.inputType}
                            placeholder={`Enter your ${items.placeholder}`}
                            id={items.id}
                            name={items.id}
                            value={userData[items.id]}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex flex-col gap-1.5 w-full px-2 mt-4">
                    <label
                      className="font-normal text-base text-[#000F02] capitalize"
                      htmlFor="message"
                    >
                      message
                    </label>
                    <textarea
                      name="message"
                      onChange={handleOnChange}
                      value={userData.message}
                      required
                      className=" w-full h-[110px] bg-white rounded-lg p-3"
                    ></textarea>
                  </div>
                  <div className="mt-5 lg:mt-[42px] ms-2">
                    <CommonBtn btnName={"Submit"} />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2 lg:ps-4 hidden lg:block">
            <img className="w-full" src={contactImg} alt="contact-us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
