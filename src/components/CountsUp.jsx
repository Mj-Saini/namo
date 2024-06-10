import React from "react";
import CountUp from "react-countup";

const CountsUp = () => {
  return (
    <div>
      <div className="shadow-drop_shadow rounded-[24px] bg-white py-6 px-6 md:px-20">
        <div className="flex flex-wrap gap-6 sm:gap-0">
          <div className="w-full sm:w-3/12 ">
            <CountUp start={0} end={8.9} duration={2.75} decimals={1}>
              {({ countUpRef, start }) => (
                <div>
                  <div className="flex justify-center sm:justify-start">
                    <span
                      className="font-medium text-3xl md:text-5xl text-[#00A015]"
                      ref={countUpRef}
                    />
                    <span
                      className="font-medium text-3xl md:text-5xl text-[#00A015]"
                      onClick={start}
                    >
                      %
                    </span>
                  </div>
                </div>
              )}
            </CountUp>
            <p className="font-normal text-base text-[#000F02] mt-2 text-center sm:text-start">
              Active Clints{" "}
            </p>
          </div>
          <div className="w-full sm:w-6/12 gradient_border">
            <CountUp start={0} end={100}>
              {({ countUpRef, start }) => (
                <div>
                  <div className="flex justify-center">
                    <span
                      className="font-medium text-3xl md:text-5xl text-[#00A015]"
                      ref={countUpRef}
                    />
                    <span
                      className="font-medium text-3xl md:text-5xl text-[#00A015]"
                      onClick={start}
                    >
                      k+
                    </span>
                  </div>
                  <p className="font-normal text-base text-[#000F02] text-center  mt-2">
                    Reviews
                  </p>
                </div>
              )}
            </CountUp>
          </div>
          <div className="w-full sm:w-3/12">
            <CountUp start={0} end={10}>
              {({ countUpRef, start }) => (
                <div>
                  <div className="flex justify-center sm:justify-end">
                    <span
                      className="font-medium text-3xl md:text-5xl text-[#00A015]"
                      ref={countUpRef}
                    />
                    <span
                      className="font-medium text-3xl md:text-5xl text-[#00A015]"
                      onClick={start}
                    >
                      M+
                    </span>
                  </div>
                  <p className="font-normal text-base text-[#000F02] text-center sm:text-end sm:pe-4 mt-2">
                    Downloads
                  </p>
                </div>
              )}
            </CountUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountsUp;
