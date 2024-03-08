// Main.js
import React from "react";
import backgroundImage from "../images/HeroBg.png";
import dashBoardImage from "../images/ProductDashBoard.png";
import ownersImage from "../images/ownersImage.png"

const Main = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat pt-40"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#c503c9] capitalize text-lg">coming soon!</h1>
          <h1
            className="sm:text-3xl md:text-6xl font-bold text-center text-[#032563]"
            style={{ maxWidth: "700px" }}>
            Keep track of your shops remotely
          </h1>
          <p
            className="px-4 text-center sm:text-xs md:text-xl mt-3 text-extrabold"
            style={{ maxWidth: "700px" }}>
            Grow Your Business from Anywhere with Real-Time Insights: Monitor
            Sales, Inventory and More with Ease
          </p>
          <div className="mt-10 flex flex-col   md:flex-row md:space-x-5 items-center  ">
            <button
              className="py-3 px-5 text-white rounded-lg text-xl capitalize hidden md:inline-block flex-nowrap"
              style={{
                background: "linear-gradient(to right, #1652e7, #9327f7)",
                flexShrink: "0",
              }}>
              start for free
            </button>
            <input
              type="text"
              className=" w-full md:w-64 h-16 px-4 border rounded-md my-5"
              placeholder="Drop your email"
            />

            <button
              className="py-3 px-5 text-white rounded-lg text-xl capitalize inline-block flex-nowrap w-full md:w-44"
              style={{
                background: "linear-gradient(to right, #1652e7, #9327f7)",
                flexShrink: "0", flexWrap:"nowrap"
              }}>
              join waitlist
            </button>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <img src={dashBoardImage} alt=""  className="max-w-full px-10" />
        </div>
        <div>
          <h1 className="text-center text-lg md:text-xl capitalize font-bold ">join thousands of smart business owners using vendiit</h1>
          <div className="flex justify-center items-center mb-16">
            <img src={ownersImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
