import React from 'react';
import { MdOutlinePlumbing } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { GrEmergency } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";

function WhatWeDo() {
  return (
    <div className='flex flex-col items-center justify-center'>
      {/* First Component */}
      <div className="sm:w-3/4 w-full">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-customBlue font-bold text-center mt-20 lg:m-20">Plumbing Services</h1>

      <div className='flex flex-col sm:flex-row mt-10 justify-center gap-10 p-2'>
        <div className='flex flex-col items-center text-center'>
          <div className='text-4xl'>
            <MdOutlinePlumbing />
          </div>
          <h2 className='mt-5 text-2xl'>Leak Repairs, Installations and Maintenance</h2>
          <p className='mt-5 text-sm'>
            Our team of expert plumbers provides a wide range of services including leak repairs, installations, and maintenance.
          </p>
          <button className="px-8 py-4 rounded-full bg-transparent text-black flex items-center mt-4">
            Learn More <IoIosArrowForward className="ml-2" />
          </button>
        </div>
        <div className='flex flex-col items-center text-center'>
          <div className='text-4xl'>
            <GrEmergency />
          </div>
          <h2 className='mt-5 text-2xl'>24/7 Emergency Plumbing Services</h2>
          <p className='mt-5 text-sm'>
            We offer 24/7 emergency plumbing services to ensure that you are covered in case of any plumbing emergencies.
          </p>
          <button className="px-8 py-4 rounded-full bg-transparent text-black flex items-center mt-4">
            Contact <IoIosArrowForward className="ml-2" />
          </button>
        </div>
        <div className='flex flex-col items-center text-center'>
          <div className='text-4xl'>
            <GiAutoRepair />
          </div>
          <h2 className='mt-5 text-2xl'>Professional Plumbing Solutions for Residential and Commercial Properties</h2>
          <p className='mt-5 text-sm'>
            Our experienced plumbers provide reliable and efficient plumbing solutions for both residential and commercial properties.
          </p>
          <button className="px-8 py-4 rounded-full bg-transparent text-black flex items-center mt-4">
            Get Started <IoIosArrowForward className="ml-2" />
          </button>
        </div>
      </div>
      </div>


      
    </div>
  );
}

export default WhatWeDo;
