import React from "react";
import BannerImage from "../../assets/Images2.png";

const Banner = () => {
  return (
    <div className="pt-8 px-5 mb-25 bg-linear-to-r from-[#111111] to-[#777777]">
      <div className="page-size  lg:flex justify-between items-center ">
        <div className="">
          <h1 className="banner-title font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-7">
            Get body in <br /> shape & stay <br /> healthy
          </h1>
          <p className="mb-7">
            A huge selection of health and <br className="sm:hidden" /> fitness
            content, healthy recipes <br /> and transformation stories to help{" "}
            <br className="sm:hidden" /> you get fit and stay fit!
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-3.5">
            <button className="btn rounded-full bg-[#E6533C]">
              Join Club Now!
            </button>
            <button className="btn rounded-full border border-white bg-transparent">
              Download App
            </button>
          </div>
        </div>
        <div className="relative ">
          <img className="mx-auto" src={BannerImage} alt="" />

          <div className="flex absolute lg:-left-28 sm:left-40 lg:bottom-15 left-3 bottom-60 md:bottom-32  items-center gap-3 rounded-xl bg-black/20 w-fit p-5">
            <div
              className="w-10 h-10 bg-[#E6533C] rounded-full 
            "
            ></div>
            <div className="">
              <h1 className="text-[#FAFAF9] mb-2 font-black text-2xl">350+</h1>
              <p className="text-[#EFEDE8]/64">Video tutorial</p>
            </div>
          </div>
          <div className="absolute top-12 right-4 lg:-right-19 lg:top-32 sm:right-30 bg-[#FFFFFF]/10 px-2 lg:px-6 py-2  rounded-xl">
            <div className="">
              <h1 className="text-[#FAFAF9] mb-1.5 font-black text-2xl lg:text-4xl">
                500+
              </h1>
              <p className="text-[#EFEDE8]/64 text-[13px] sm:text-base">
                Free Workout Videos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
