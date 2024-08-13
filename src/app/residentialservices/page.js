import React from 'react';
import SchedulService from '../components/SchedulService';

function ResidentialServices() {
  return (
    <>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-6 sm:p-12 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-left text-blue-600 mb-4">Residential Plumbing Services</h1>
        <h3 className="text-lg sm:text-2xl font-medium text-left text-gray-700 mb-6">Expert plumbing solutions for your home.</h3>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
          We offer a wide range of residential plumbing services to meet all your needs. Whether it’s a leaky faucet, a clogged drain, or a complete bathroom remodel, our experienced plumbers are here to help.
        </p>
        <ul className="list-disc text-gray-700 pl-6 space-y-2">
          <li className="text-lg sm:text-xl">Leak Detection and Repair</li>
          <li className="text-lg sm:text-xl">Drain Cleaning</li>
          <li className="text-lg sm:text-xl">Water Heater Installation and Repair</li>
          <li className="text-lg sm:text-xl">Fixture Installation and Repair</li>
          <li className="text-lg sm:text-xl">Bathroom and Kitchen Remodeling</li>
        </ul>
      </div>
      <div className="w-full mt-12">
        <SchedulService />
      </div>
    </>
  );
}

export default ResidentialServices;
