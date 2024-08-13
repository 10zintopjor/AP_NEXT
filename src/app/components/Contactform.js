import React from 'react';

export default function Contactform({isMobile}) {
  return (
    <div className={`relative z-20 p-10 lg:p-10 text-center max-w-3xl bg-gray-900 bg-opacity-50 border border-white rounded ${isMobile ? 'w-5/6 m-4' : 'w-full max-w-96'}`}>
      <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
      {/* Form fields */}
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-white text-black placeholder-black rounded-lg py-3 px-4 focus:outline-none border border-white"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="bg-white text-black placeholder-black rounded-lg py-3 px-4 focus:outline-none border border-white"
        />
        <input
          type="text"
          placeholder="Location"
          className="bg-white text-black placeholder-black rounded-lg py-3 px-4 focus:outline-none border border-white"
        />
        <textarea
          placeholder="Describe your issue..."
          rows="4"
          className={`bg-white text-black placeholder-black rounded-lg py-3 px-4 focus:outline-none border border-white ${isMobile ? 'w-full' : ''}`}
        ></textarea>
        <button
          type="submit"
          className="bg-customBlue border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-customBlue transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
