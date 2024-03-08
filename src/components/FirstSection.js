import React from "react";
import ImageContainer from "../images/ImageContainer.png"

const FirstSection = () => {
  return (
    <div className="mt-16">
      <div className="mx-auto sm:w-full md:w-96 p-4">
        <h1 className="text-center font-bold text-2xl md:text-4xl">
          How Vendiit Works for you
        </h1>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-16 md:gap-8 md:justify-between md:items-center">
        <div className=" w-full md:w-[40%] flex flex-col justify-center items-center md:py-16 px-8 md:px-24">
          <div className=" w-full">
            <div className="w-full flex items-start md:justify-center gap-8 pr-8 border-r-2 pb-4 md:pb-8 border-solid border-[#0757e5]">
              <div className=" h-13 w-13 px-2 rounded-full md:mt-1 bg-gradient-to-r from-[#0757e5] to-[#b31cfb] text-white flex items-center justify-center">
                1
              </div>
              <div className="flex flex-col gap-4">
                <p className=" text-[#0757E5] text-xl md:text-2xl font-bold">
                  Sign Up for Vendiit Account
                </p>
                <p className=" text-[#021331] text-base md:text-xl">
                  Register and do a KYC to get your own account unique to your
                  business
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className="w-full flex items-start md:justify-center  gap-8 pr-8 border-r-2 pb-4 md:pb-8 border-solid border-[#e6effe]">
              <div className="h-13 w-13 px-2 rounded-full md:mt-1 bg-[#E6EFFE] text-[#0757E5] flex items-center justify-center">
                2
              </div>
              <div className="flex flex-col gap-4">
                <p class=" text-[#0757E5] text-xl md:text-2xl font-bold opacity-40">
                  Onboarding your business
                </p>
                <p className="text-[#021331] text-base md:text-xl opacity-40">
                  Customise your business, create outlets, inventory and add
                  your cashiers and manager
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className="w-full flex items-start md:justify-center  gap-8 pr-8 border-r-2 pb-4 md:pb-8 border-solid border-[#e6effe]">
              <div className="h-13 w-13 px-2 rounded-full md:mt-1 bg-[#E6EFFE] text-[#0757E5] flex items-center justify-center">
                3
              </div>
              <div className="flex flex-col gap-4">
                <p class=" text-[#0757E5] text-xl md:text-2xl font-bold opacity-40">
                  Manage your Business{" "}
                </p>
                <p className="text-[#021331] text-base md:text-xl opacity-40">
                  Get access to your business dashboard to see every intrinsic
                  details of your business
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 px-10 md:px-24">
            <img src={ImageContainer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
