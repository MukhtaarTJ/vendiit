import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import navlogo from "../../src/images/nav-logo.png";

const NavBar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/" },
    { name: "Store", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Resources", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  const customStyles = {
    borderImage: 'linear-gradient(to right, #0757e5, purple, pink)',
    borderImageSlice: 1,
    borderRadius:"10px !important"
  };


  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-around bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={navlogo} alt="" className="w-10" />
          <span className="text-[#0757e5]">vendiit</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}>
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-normal">
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500 ">
                {link.name}
              </a>
            </li>
          ))}

        </ul>
        <div>
        <button style={customStyles} className="border border-solid px-4 py-2   md:ml-8 font-semibold text-[#0757e5] duration-500 sm: hidden  md:block ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
