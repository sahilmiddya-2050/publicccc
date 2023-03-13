import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const HeroSection = () => {
  const [showMobileMenue, setShowMobileMenue] = useState(true);

  return (
    <>
      {showMobileMenue && (
        <div className="fixed md:hidden bg-white p-10 left-0 right-0">
          <span
            className="text-4xl cursor-pointer"
            onClick={() => setShowMobileMenue(false)}
          >
            X
          </span>
          <div className="flex flex-col gap-4 mt-8">
            <div className="rounded-[6px] h-[37px] w-full flex justify-center items-center border border-blue-500 text-blue-500">
              Psychometric assessment
            </div>
            <div className="rounded-[6px] h-[37px] w-full flex justify-center items-center border border-blue-500 text-blue-500">
              Virtual internship
            </div>
          </div>
        </div>
      )}

      <div className="min-h-[636px] px-10 bg-[#EDEDED] py-10">
        <nav className="flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <div className="md:hidden">
              <AiOutlineMenu
                className="text-[3rem] cursor-pointer"
                onClick={() => setShowMobileMenue(true)}
              />
            </div>
            <div className="h-[77px] w-[149px] -mt-[23px]">
              <img src="/logo.png" alt="" srcset="" />
            </div>
          </div>

          <div className="hidden md:flex gap-4">
            <div className="rounded-[6px] h-[37px] w-[258px] flex justify-center items-center border border-blue-500 text-blue-500">
              Psychometric assessment
            </div>
            <div className="rounded-[6px] h-[37px] w-[258px] flex justify-center items-center border border-blue-500 text-blue-500">
              Virtual internship
            </div>
          </div>
        </nav>

        <div className="space-y-5">
          <h1 className="text-[48px] text-[#313131] font-semibold max-w-[680px]">
            Helping to Find the Right Career is Priceless
          </h1>

          <p className="text-[24px] text-[#71717A] max-w-[542px]">
            Our 4 step counseling process help kids to choose the major/career
            with confidence
          </p>

          <div className="space-y-4">
            <div className="bg-[#3780FF] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center">
              Download the fllyer
            </div>
            <div className="bg-[#31B946] w-[400px] h-[48px] text-white text-[16px] rounded-[8px] flex justify-center items-center">
              Enquire now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
