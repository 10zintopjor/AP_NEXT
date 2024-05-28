"use client";


import { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Image from 'next/image'; // Import the Next.js Image component
import hero_img from "../images/hero_img.jpeg"; // Adjust the path to the image file

const VerticalLine = ({ height = '100px', color = 'white', width = '2px', margin = '0 10px' }) => {
  return (
    <div 
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        margin: margin
      }}
    />
  );
}

function Hero() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Call the function once to set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='items-start'>
      <div className="relative flex flex-col lg:flex-row items-center justify-center bg-cover bg-center bg-no-repeat text-white h-max">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero image */}
        <Image src={hero_img} alt="Hero Image" layout="fill" objectFit="cover" quality={100} />
        {/* Proudly Plumbing section */}
        <div className="z-10 p-10 lg:p-40 text-center max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold">Proudly Plumbing</h1>
          <h3 className="text-xl mt-8">We provide high-quality plumbing services for residential and commercial clients in the Greater Toronto Area</h3>
          {/* Buttons */}
          <div className="mt-8">
            <button className="bg-transparent text-white text-lg sm:text-2xl py-3 px-6 border border-white rounded-lg mr-4 hover:bg-white hover:text-customBlue transition duration-300">Schedule</button>
            <button className="bg-transparent text-white text-lg sm:text-2xl py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-customBlue transition duration-300">Learn More</button>
          </div>
        </div>
        {/* Form section */}
        <div className={`z-10 p-10 lg:p-10 text-center max-w-3xl bg-gray-900 bg-opacity-50 border border-white rounded ${isMobile ? 'w-5/6 m-4' : 'w-full max-w-96'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          {/* Form fields */}
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Your Name" className="text-white rounded-lg py-3 px-4 focus:outline-none" />
            <input type="tel" placeholder="Phone Number" className="text-white rounded-lg py-3 px-4 focus:outline-none" />
            <input type="text" placeholder="Location" className="text-white rounded-lg py-3 px-4 focus:outline-none" />
            <textarea placeholder="Describe your issue..." rows="4" className={`text-white rounded-lg py-3 px-4 focus:outline-none ${isMobile ? 'w-full' : ''}`}></textarea>
            <button type="submit" className="bg-customBlue border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-customBlue transition duration-300">Submit</button>
          </form>
        </div>

      </div>

      <div className='flex sm:flex-row flex-col bg-customBlue sm:h-36 min-h-10 border-solid-gray-100 text-white items-center justify-center'>
        <div className='sm:text-right text-center sm:mr-20 text-2xl sm:p-1 p-8 flex flex-row items-center gap-6'>
          <p>Proudly Serving GTA</p>
          <IoLocationOutline className="text-4xl"/>
        </div>
        {isMobile ? (
          <hr className="sm:hidden block mx-4 border-gray-100 h-0.5 w-full" />
        ) : (
          <VerticalLine height="36px" /> // Adjusted height for consistency
        )}
        <div className='sm:text-left flex flex-row text-center sm:ml-20 text-2xl items-center sm:p-1 p-8 gap-6'>
          <BsTelephone className="text-4xl" />
          <p>Emergency Plumbing?</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
