import React from 'react';
import SchedulService from '../components/SchedulService';
import { FcGoogle } from "react-icons/fc";

function Reviews() {
  // Utility function to generate random background colors for initials
  const generateRandomColor = () => {
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const reviews = [
    {
      name: 'John Doe',
      review: 'Excellent service! The team was professional and efficient. Highly recommend.',
    },
    {
      name: 'Jane Smith',
      review: 'Great experience from start to finish. The plumbers were knowledgeable and fixed the issue quickly.',
    },
    {
      name: 'Emily Johnson',
      review: 'Very satisfied with the service. They were on time and did a fantastic job. Will use them again.',
    },
    {
      name: 'Michael Brown',
      review: 'Top-notch service with a personal touch. I wouldn’t trust anyone else with my plumbing needs.',
    },
    {
      name: 'Sarah Davis',
      review: 'Friendly staff and excellent results. They fixed my problem quickly and efficiently.',
    },
    {
      name: 'David Wilson',
      review: 'Great communication and even better service. They were clear about the process and delivered on their promise.',
    },
    {
      name: 'Laura White',
      review: 'Professional and reliable. I’m extremely satisfied with their service and would recommend them to anyone.',
    },
    {
      name: 'Paul Taylor',
      review: 'Quick response and excellent work. The best plumbing service I’ve used so far.',
    },
  ];

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-7xl mx-auto px-4 mt-16 sm:mt-8 mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-customBlue font-bold text-center m-8 lg:m-20">What Our Customer Say</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white h-auto sm:h-64 p-4 sm:p-6 rounded-lg shadow-md flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className={`h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full text-white ${generateRandomColor()}`}>
                    <span className="text-lg sm:text-xl font-semibold">{review.name[0]}</span>
                  </div>
                  <FcGoogle className='text-2xl'/>
                </div>
                <div className="flex-grow mt-2 sm:mt-4">
                  <h3 className="text-base sm:text-lg font-bold">{review.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SchedulService />
    </>
  );
}

export default Reviews;
