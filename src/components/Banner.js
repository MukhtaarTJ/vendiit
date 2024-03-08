import React from "react";
import cartImage from "../images/cart.png";
import tagImage from "../images/tag.png";
import message from "../images/message.png";
import BankNote from "../images/BankNote.png";
import report from "../images/report.png";
import metrics from "../images/metrics.png";
import time from "../images/time.png";
import wallet from "../images/wallet.png";
import inventory from "../images/inventory.png";
const Banner = () => {
  return (
    <div className="my-10">
      <div className="mx-auto sm:w-full md:w-2/4 p-4">
        <h1 className="text-center font-bold sm:text-2xl md:text-4xl">
          Toolbox you need to monitor and manage your business
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-2 mx-auto w-full place-items-center">
        <div>
          <img src={cartImage} alt="" className="block mx-auto md:inline mb-3" />
          <h1
            className="text-[#266ce8] font-bold text-lg text-center md:text-start"
            style={{ width: "300px" }}>
            Cloud Checkout System for Cashiers
          </h1>
          <p
            className="text-base text-center md:text-left pt-3"
            style={{ width: "295px" }}>
            Your <span className="font-bold"> checkout system </span>on your
            device browser for all your cashiers. No need for specialised
            hardware or installation
          </p>
        </div>
        <div>
          <img src={tagImage} alt="" className="block mx-auto md:inline mb-3" />
          <h1
            className="text-[#266ce8] font-bold text-lg text-center md:text-start"
            style={{ width: "300px" }}>
            Free E-commerce Listing on Vendiit Store front{" "}
          </h1>
          <p
            className="text-base text-center md:text-left pt-3"
            style={{ width: "295px" }}>
            Expand your reach and boost sales with Free E-commerce listings on
            Vendiit aggregator store{" "}
          </p>
        </div>
        <div>
          <img src={message} alt="" className="block mx-auto md:inline mb-3" />
          <h1
            className="text-[#266ce8] font-bold text-lg text-center md:text-start"
            style={{ width: "300px" }}>
            Social Media Account Integration{" "}
          </h1>
          <p
            className="text-base text-center md:text-left pt-3"
            style={{ width: "295px" }}>
            Extend your business to your social media accounts by selling right
            on your social media timeline
          </p>
        </div>
        <div>
          <img src={BankNote} alt="" className="block mx-auto md:inline mb-3" />
          <h1
            className="text-[#266ce8] font-bold text-lg text-center md:text-start"
            style={{ width: "300px" }}>
            Real-time Income Tracking across All Outlets{" "}
          </h1>
          <p
            className="text-base text-center md:text-left pt-3"
            style={{ width: "295px" }}>
            Stay up-to-date on your sales, income and cash flow in real-time
            from all your outlets across different locations
          </p>
        </div>
        <div>
          <img src={report} alt="" className="block mx-auto md:inline mb-3" />
          <h1
            className="text-[#266ce8] font-bold text-lg text-center md:text-start"
            style={{ width: "300px" }}>
            Comprehensive Business Reports{" "}
          </h1>
          <p
            className="text-base text-center md:text-left pt-3"
            style={{ width: "295px" }}>
            Generate customised in-depth Reports of how your business is doing
            to make informed decisions
          </p>
        </div>
        <div>
          <img src={metrics} alt="" className="block mx-auto md:inline mb-3" />
          <h1
            className="text-[#266ce8] font-bold text-lg text-center md:text-start"
            style={{ width: "300px" }}>
            Remote Access to Business Metrics{" "}
          </h1>
          <p
            className="text-base text-center md:text-left pt-3"
            style={{ width: "295px" }}>
            Access all your granular business performance and growth metrics
            from anywhere at anytime
          </p>
        </div>
        <div>
          <img src={time} alt="" className="block mx-auto md:inline mb-3" />
          <h1
            className="text-[#266ce8] font-bold text-lg text-center md:text-start"
            style={{ width: "300px" }}>
            Real-time Sales Monitoring across All Outlets{" "}
          </h1>
          <p
            className="text-base text-center md:text-left pt-3"
            style={{ width: "295px" }}>
            Get Instant Insights into Your Outlets Sales Performance with meta
            data of each sales made.
          </p>
        </div>
        <div>
          <img src={wallet} alt="" className="block mx-auto md:inline mb-3" />
          <h1
            className="text-[#266ce8] font-bold text-lg text-center md:text-start"
            style={{ width: "300px" }}>
            Centralised Wallet for Collecting Payment{" "}
          </h1>
          <p
            className="text-base text-center md:text-left pt-3"
            style={{ width: "295px" }}>
            Effortlessly collect payments from multiple channels in one
            centralised wallet with payment validation
          </p>
        </div>
        <div>
          <img src={inventory} alt="" className="block mx-auto md:inline mb-3" />
          <h1
            className="text-[#266ce8] font-bold text-lg text-center md:text-start"
            style={{ width: "300px" }}>
            Real-time inventory tracking and management{" "}
          </h1>
          <p
            className="text-base text-center md:text-left pt-3"
            style={{ width: "295px" }}>
            Track all your outlets inventory levels to know when to restock your
            warehouse
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
