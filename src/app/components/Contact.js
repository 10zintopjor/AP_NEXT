"use client";

import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';

function Contact() {
  return (
    <>
      <div className='relative'>
        <div className='w-full bg-customBlue text-white py-8 sm:py-10'>
          <div className='flex flex-col w-full sm:w-3/4 mx-auto'>
            <h1 className='text-3xl sm:text-5xl text-center sm:text-left p-2 sm:p-4'>Expert Plumbing Services in Toronto</h1>
            <h3 className='text-base sm:text-xl text-center sm:text-left p-2 sm:p-4'>Trust our experienced plumbers for all your residential and commercial plumbing needs</h3>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-start p-2 sm:p-4 gap-4 sm:gap-10'>
              <button className='bg-transparent text-white text-base sm:text-3xl p-3 sm:p-5 border border-white hover:bg-white hover:text-customBlue transition duration-300'>Schedule</button>
              <button className='bg-transparent text-white text-base sm:text-3xl p-3 sm:p-5 border border-white hover:bg-white hover:text-customBlue transition duration-300'>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      

      {/* Contact Information */}
      <div className='w-full sm:w-3/4 mx-auto flex flex-col justify-center m-10 p-4'>
        <h1 className='text-3xl sm:text-5xl text-left font-semibold text-customBlue'>Contact Information</h1>
        <h3 className='text-base sm:text-xl text-left mt-4'> We are here to help with all your plumbing needs.</h3>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
          <div className='flex flex-col bg-white rounded-lg p-4'>
            <div className='mb-2 sm:mb-4 text-xl sm:text-3xl'><MdEmail /></div>
            <h3 className='text-base sm:text-lg'>Email</h3>
            <h3 className='text-base sm:text-lg'>Send us a message today!</h3>
            <span>ariaplumbingca@gmail.com</span>
          </div>
          <div className='flex flex-col bg-white rounded-lg p-4'>
            <div className='mb-2 sm:mb-4 text-xl sm:text-3xl'><FaPhoneAlt /></div>
            <h3 className='text-base sm:text-lg'>Phone</h3>
            <h3 className='text-base sm:text-lg'>Call us now for assistance.</h3>
            <span>647-765-7484</span>
          </div>
          <div className='flex flex-col bg-white rounded-lg p-4'>
            <div className='mb-2 sm:mb-4 text-xl sm:text-3xl'><FaLocationDot /></div>
            <h3 className='text-base sm:text-lg'>Office</h3>
            <h3 className='text-base sm:text-lg'>517 Browns LineToronto, ON M8W 3V1</h3>
            <span><Link href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Get Directions</Link></span>
          </div>
        </div>
        <div className='sm:pr-14 sm:m-0 mt-8'>
          
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1422561151053!2d-79.54828382302473!3d43.60357957110458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b48117239e743%3A0xa99c120969d11db4!2s517%20Browns%20Line%2C%20Toronto%2C%20ON%20M8W%203V1!5e0!3m2!1sen!2sca!4v1723507819863!5m2!1sen!2sca" width="100%" height="300" allowfullscreen="" loading="lazy"></iframe>

        </div>
      </div>
    </>
  );
}


export default Contact;
