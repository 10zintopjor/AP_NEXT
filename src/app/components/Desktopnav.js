"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { IoCallOutline } from 'react-icons/io5';
import { links } from './Navlinks';
import Image from 'next/image';
import logo from '../images/8.png';
import Link from 'next/link';

const Desktopnav = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 bg-customBlue hidden sm:block">
      {/* Top Nav */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-48 py-2">
        {/* Logo */}
        <div className="py-1">
          <Link href="/">
          <Image src={logo} alt="logo" className="w-auto h-16 cursor-pointer" />
          </Link>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-4 mt-4 md:ml-auto">
          <div className="flex flex-row gap-4 justify-end">
            {/* Adjusted the button class */}
            <button className="bg-red-500 text-white py-1 px-4 flex flex-row items-center gap-2 rounded hover:bg-white hover:text-red-700">
              <IoCallOutline />
              <p className="font-sans">437-662-7338</p>
            </button>
            <button className="bg-transparent text-white px-2 py-1 rounded border border-white hover:bg-white hover:text-customBlue">
              <p>Book Your Appointment</p>
            </button>
          </div>
          <div>
            <div className="flex flex-row gap-4 justify-center text-white text-lg">
              {links.map((link) => (
                <div key={link.name} className="relative">
                  <div className="text-left cursor-pointer group">
                    <Link href={link.link} className={`py-1 px-4 flex items-center justify-center ${pathname === link.link ? "text-white underline underline-offset-8 pb-1" : "text-white"} transition-all duration-300 relative hover:underline hover:underline-offset-8 hover:pb-4`}>
                      {link.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktopnav;
