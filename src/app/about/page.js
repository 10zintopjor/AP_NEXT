import React from 'react';
import SchedulService from '../components/SchedulService';

function AboutUs() {
  return (
    <>
      <div className=" bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto px-4 mt-16 sm:mt-8 mb-36">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-customBlue font-bold text-center m-8 lg:m-20">Plumbing Service You Can Trust</h1>

            <p className="text-lg mb-6">
              Welcome to <strong>Your Family Plumber</strong>. With over 15 years of experience, we offer reliable and efficient plumbing services for your home. Our expert team is ready to handle any plumbing issue, big or small.
            </p>
            <h3 className="text-2xl text-center font-semibold mb-8">From The Owner</h3>
            <p className="text-lg mb-4">
              At <strong>Your Family Plumber</strong>, we are dedicated to providing top-notch plumbing services. We specialize in backflow prevention, water meter installation, and more, ensuring every job is done right the first time.
            </p>
            <p className="text-lg mb-4">
              Our skilled professionals are committed to going the extra mile. We handle any plumbing challenge with ease and ensure you get the best performance without the usual hassles.
            </p>
            <p className="text-lg mb-4">
              Your satisfaction is our priority. At <strong>Your Family Plumber</strong>, we don’t stop until you’re completely happy with our work.
            </p>
          </div>
      </div>
      <SchedulService />
    </>
  );
}

export default AboutUs;
