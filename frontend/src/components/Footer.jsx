import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#232323] border border-gray-200">
      <div className="max-w-screen-lg md:py-10 py-5 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r ">
          <div className="text-sm uppercase text-red-600 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <a className=" text-white/70 " href="#">
                Home
              </a>
            </li>
            <li className="my-2">
              <a className=" text-white/70 " href="#">
                About
              </a>
            </li>
            <li className="my-2">
              <a className=" text-white/70 " href="#">
                Contact
              </a>
            </li>
            <li className="my-2">
              <a className=" text-white/70 " href="#">
                Book Your Stay
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r md:text-center">
          <a
            href="#"
            className="relative text-3xl font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 transform hover:scale-110 hover:after:w-full animate-pulse tracking-widest after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-0 after:bg-gradient-to-r from-red-500 to-red-600 after:transition-all after:duration-300 after:rounded-lg shadow-lg hover:shadow-red-500/50"
          >
            HOTELUXE
          </a>
          <p className=" text-white/70  text-md mb-10 mt-10">
            Experience unparalleled elegance and sophistication at Hoteluxe.
            Where every moment is a chance to unwind, recharge, and rediscover
            the art of luxury living.
          </p>
        </div>
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-red-600 font-bold">
            Contact Us
          </div>
          <ul>
            <li className="my-2">
              <a className=" text-white/70 " href="#">
                XXX XXXX, Floor 4 San Francisco, CA
              </a>
            </li>
            <li className="my-2">
              <a className=" text-white/70 " href="#">
                contact@company.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* icons  */}
      <div className="flex pt-5 pb-1 px-3 m-auto text-gray-800 text-2xl flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 mx-1  text-white/70  hover:text-red-600"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 mx-1  text-white/70  hover:text-red-600"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 mx-1  text-white/70  hover:text-red-600"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 mx-1  text-white/70  hover:text-red-600"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>

      <div className="text-center  text-white/70  -space-y-3">
        <div className="my-5"> Code By Mishal Aslam</div>
        <div className="my-5"> Copyright 2024. All Rights Reserved.</div>
      </div>
    </div> // This was missing
  );
};

export default Footer;
