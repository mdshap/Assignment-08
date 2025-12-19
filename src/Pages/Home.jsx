import React, {  } from "react";
import hero from "../assets/hero.png";
import playLogo from "../assets/playLogo.png";
import appStoreLogo from "../assets/appStoreLogo.png";
import Loader from "../Compoments/Loader";

const Home = () => {


  return (
    <div className="min-h-screen bg-gray-50">
      <section className=" border-2 border-red-600 pt-10 md:pt-20">
        <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            We Build <br /> <span className="text-purple-600">Productive</span>{" "}
            Apps
          </h1>
          <p className="text-sm sm:text-md md:text-xl mt-6 text-gray-500 mb-8 sm: max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center space-x-4  lg:mb-8">
            <div className="flex justify-center space-x-4 mb-12">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center space-x-3"
              >
                <img src={playLogo} className="h-6 w-6" alt="" />
                <span className="font-medium">Google Play</span>
              </a>

              <a
                href="https://apps.apple.com/us/app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center space-x-3"
              >
                <img src={appStoreLogo} className="h-7 w-7" alt="" />
                <span className="font-medium">App Store</span>
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center mx-auto  mb-0">
            <img
              src={hero}
              alt="iPhone Preview"
              className="relative z-10 object-contain mt-0 ml-4"
            />
          </div>
        </div>
      </section>


      <section
        className="py-12 md:py-16"
        style={{
          background: "linear-gradient(215deg, #8146e3 0%, #6e6afb 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-white text-center mb-2 tracking-tight">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center pt-10 gap-2">
              <div className="text-gray-200  text-sm tracking-wide mb-1">
                Total Downloads
              </div>
              <div className="text-[3rem] md:text-6xl font-bold text-white leading-tight mb-1">
                29.6M
              </div>
              <div className="text-gray-200  text-sm tracking-wide">
                21% More Than Last Month
              </div>
            </div>

            <div className="flex flex-col items-center pt-10 gap-2">
              <div className="text-gray-200  text-sm tracking-wide mb-1">
                Total Reviews
              </div>
              <div className="text-[3rem] md:text-6xl font-bold text-white leading-tight mb-1">
                906K
              </div>
              <div className="text-gray-200 text-sm tracking-wide">
                46% More Than Last Month
              </div>
            </div>
            <div className="flex flex-col items-center pt-10 gap-2">
              <div className="text-gray-200  text-sm tracking-wide mb-1">
                Active Apps
              </div>
              <div className="text-[3rem] md:text-6xl font-bold text-white leading-tight mb-1">
                132+
              </div>
              <div className="text-gray-200  text-sm tracking-wide">
                31 More Will Launch
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
