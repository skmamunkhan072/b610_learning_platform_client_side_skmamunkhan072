import React from "react";
import "./About.css";
import ProgressBarImg from "../../../img/shea_img/ProgressBarImg.png";

const About = () => {
  return (
    <div className="w-10/12 mx-auto mt-20 lg:flex justify-center items-center	">
      <div className=" lg:w-6/12 px-4 ">
        {/* progress bar start */}
        <div className="mb-12">
          <h1 className="text-start mb-2">Web development</h1>
          <div className="bg-lime-600	 relative h-[10px] w-full rounded-2xl">
            <div className="bg-primary absolute top-0 left-0 h-full w-1/2 rounded-2xl">
              <span className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                50%
              </span>
            </div>
          </div>
        </div>
        {/* Progress bar end  */}
        {/* progress bar start */}
        <div className="mb-12">
          <h1 className="text-start mb-2">Front end developer</h1>
          <div className="bg-lime-600	 relative h-[10px] w-full rounded-2xl">
            <div className="bg-primary absolute top-0 left-0 h-full w-[75%] rounded-2xl">
              <span className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                75%
              </span>
            </div>
          </div>
        </div>
        {/* Progress bar end  */}
        {/* progress bar start */}
        <div className="mb-12">
          <h1 className="text-start mb-2">Graphics design</h1>
          <div className="bg-lime-600	 relative h-[10px] w-full rounded-2xl">
            <div className="bg-primary absolute top-0 left-0 h-full w-[90%] rounded-2xl">
              <span className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white">
                <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                90%
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Progress bar end  */}
      <div className="lg:w-6/12 p-7">
        <img src={ProgressBarImg} alt="Progress bar igm " />
      </div>
    </div>
  );
};

export default About;
