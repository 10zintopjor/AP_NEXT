"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ServiceCard = ({ key,service}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <Image src={service.imageUrl} alt={service.title} width={80} height={80} className="w-20 h-20 mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">{service.title}</h2>
      <p className="text-gray-700 text-center mb-4">{service.description}</p>
      <div className="flex-grow" /> {/* This div helps push the button to the bottom */}
      <Link href={`/services/${service.id}`}>

      <button className="px-8 py-4 text-base rounded-lg border border-black bg-transparent text-black hover:bg-customBlue hover:text-white transition">
        Learn More        
      </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
