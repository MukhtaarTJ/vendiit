import React from 'react';
import whitespace from '../images/whiteSpace.png';
import brands from "../images/brands.png"

const SecondSection = () => {
  const customStyles = {
    border: '2px solid',
    borderImage: 'linear-gradient(to right, #ffffff, #b31cfb)',
    borderImageSlice: 1,
  };

  return (
    <div className='mt-10 md:mt-20'>
      <div className='flex flex-col md:flex-row w-[80%] p-10 bg-[#0757e5] mx-auto rounded-xl space-x-40'>
        <div className=''>
          <p className='text-white mt-20 text-2xl font-bold' style={{ width: '300px' }}>
            Start tracking your business metrics
          </p>
          <p className='text-[#d1e0fa] font-extralight my-7' style={{ width: '300px' }}>
            Setup your account and get real-time access to all your business metrics
          </p>
          <a href="#">
            <button className='p-5 flex flex-col items-center justify-center text-white rounded-lg ' style={customStyles}>
              Start for free
            </button>
          </a>
        </div>
        <div>
          <img src={whitespace} alt="" className='' />
        </div>
      </div>
      <div className='mt-20 '>
      <p className='text-center text-sm md:text-lg'>We are in partnership arrangement with these innovative brands</p>

      </div>
   <div className='flex justify-center items-center mt-10 md:mt-16'>
    <img src={brands} alt="" />
   </div>
    </div>
  );
};

export default SecondSection;
