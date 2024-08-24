// pages/services.js
"use client"
import React from 'react';
import ServiceCard from '../components/Servicecard';
import SchedulService from '../components/SchedulService';
import {services} from "../data/servicesdata"

const Services = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto px-4 mt-16 sm:mt-8 mb-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-customBlue font-bold text-center my-8 lg:m-20">Plumbing Services</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
              key={index}  // Make sure each item has a unique key prop
              service={service}  // Pass the entire service object as a prop
            />
            ))}
          </div>
        </div>
      </div>
      <SchedulService />
      
    </>
  );
}

export default Services;
