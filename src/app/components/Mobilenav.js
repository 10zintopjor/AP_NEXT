"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { IoCallOutline } from 'react-icons/io5';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/8.png'; // Adjust the path if necessary
import { links } from './Navlinks';

const Mobilenav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='sticky top-0 z-50 sm:hidden'>
      {/* Top Nav */}
      <div className="bg-customBlue w-full">
        <div className='flex flex-col'>
          <div className="flex flex-col w-full max-w-5xl mx-auto justify-between items-center ">
            {/* Logo */}
            <div className="p-1"> {/* Added md:pl-4 for desktop padding */}
            <Link href="/">
            <Image src={logo} alt="logo" className="h-24 p-3 md:cursor-pointer" />
            
            </Link>
            </div>

            <div className='flex justify-between items-center w-full mt-0'>
              {/* Hamburger Menu for Mobile */}
              <div>
                <div className="w-full h-10 bg-customBlue text-white items-center"> {/* Increase z-index */}
                  <button onClick={toggleMobileMenu} className='ml-3'>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
              {/* Contact Information */}
              <div className="px-4 mb-1 mr-1 flex flex-col md:items-start gap-2 text-l items-center">
                
              <a href="tel:4135557777">
                <div className="bg-red-700 text-white p-2 rounded flex items-center gap-2">
                  <IoCallOutline />
                  <p className='font-bold font-sans'>417-262-1238</p>
                  
                </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-customBlue z-50 flex flex-col justify-center text-white text-2xl"
          >
            <button className="absolute top-0 right-0 p-6 text-8xl" onClick={toggleMobileMenu}>
              &times;
            </button>
            <nav className="flex flex-col items-center">
              {/* Map over links array to create Link components */}
              {links.map((link) => (
                <Link key={link.name} href={link.link} className="w-full text-center py-6 hover:opacity-90" onClick={toggleMobileMenu}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobilenav;
