import React from "react";
import RealTime from "../images/realTime.png";
import FoodDashBoard from "../images/foodDashBoard.png";

const Hero = () => {
  return (
    <div>
      <div className="text-center">
        <div className="mx-auto sm:w-full md:w-2/4 p-4">
          <h1 className="sm:text-2xl md:text-4xl font-extrabold">
            Never again worry about your business when you're away
          </h1>
        </div>
      </div>
      <div className="my-5 flex flex-col  md:flex-row justify-center items-center md:space-x-5">
        <div className="bg-[#c503c9] max-w-96 p-5 rounded-md text-white my-3 mx-6">
          <p className="text-xs font-light my-4 text-[#f8e0f8]">
            Vendiit for Merchants
          </p>
          <h3 className="text-2xl font-semibold">
            Real-time tracking
            <br /> of all business metrics
          </h3>
          <p className="py-4 text-sm">
            You never have to worry about how your business outlets are ran when
            you can always keep an eye on every activities and metrics of your
            business across different locations all in one dashboard
          </p>
          <img src={RealTime} alt="" />
        </div>
        <div className="bg-[#0757e5] max-w-96 p-5 rounded-md text-white mx-6 ">
          <p className="text-xs font-light my-4 text-[#f8e0f8] ">
            Vendiit for Merchants
          </p>
          <h3 className="text-2xl font-semibold">
            Easy in-store checkout of goods
          </h3>
          <p className="py-4 text-sm">
            Onboard your cashiers to sell your products and services on vendiit
            cloud POS and accept payment in one centralised wallet for
            hassle-free transaction with individual cashier’s sale report
          </p>
          <img src={FoodDashBoard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
