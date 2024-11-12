import React from "react";
import Button from "../shared/Button";
import Button2 from "../shared/Button2";

const Hero = () => {
  return (
    <div className="">
      <div className="   flex relative z-20 items-center overflow-hidden ">
        <div className="container mx-auto flex relative py-16 w-10/12 ">
          <div className="flex w-full md:space-x-36 space-x-0">
            {/* left side  */}
            <div className="sm:w-6/12 lg:w-5/12 flex flex-col relative z-20 p-6">
              <span className="w-20 h-2 bg-[#232323] dark:bg-white mb-12"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-white/70 ">
                Indulge in
                <span className="text-5xl sm:text-7xl">Luxury</span>
              </h1>
              <p className="text-sm sm:text-base text-white/70 mt-5">
                Experience unparalleled elegance and sophistication at Hoteluxe. 
                Where every moment is a chance to unwind, recharge, and rediscover 
                the art of luxury living.
              </p>
              <div className="flex mt-8 space-x-6">
                <Button text="Book Your Stay" />
                <Button2 text="Experience the Best" />
        
              </div>
            </div>

            {/* right side  */}
            <div className="hidden md:block sm:w-7/12 lg:w-9/12 relative  ">
              <img
                src="https://media.istockphoto.com/id/2021707621/photo/night-scene-modern-style-luxury-black-master-bedroom-with-city-view-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=weXg9unvJ9zU9hUmNL4D65o11o3BZIp7p8EBPwn9Y64="
                className="max-w-xl md:max-w-2xl mx-auto w-[700px] h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;