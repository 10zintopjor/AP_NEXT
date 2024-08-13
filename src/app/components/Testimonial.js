import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "The service provided was exceptional! From start to finish, the team demonstrated professionalism and efficiency. I highly recommend their services to anyone in need. Thank you for going above and beyond!",
      rating: 4,
    },
    {
      name: "Jane Smith",
      feedback: "I was thoroughly impressed with the level of expertise and attention to detail exhibited by the team. ",
      rating: 5,
    },
    {
      name: "Michelle",
      feedback: "The overall experience was fantastic! The team was prompt, courteous, and extremely knowledgeable. They exceeded my expectations in every aspect and delivered outstanding results.",
      rating: 4,
    },
    {
      name: "Michael Brown",
      feedback: "Great experience overall.",
      rating: 4,
    },
  ];

  const googleReviews = 150; // Number of Google reviews

  return (
    <div className='flex flex-col items-center w-full bg-gray-100'>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-customBlue font-bold text-center my-8 lg:my-10">What Clients Are Saying About Us</h1>

      <div className='w-full max-w-4xl bg-white p-4 rounded-lg shadow-md mb-10'>
        <div className='flex items-center justify-center mb-4'>
          <FcGoogle className="text-4xl"/> 
          <p className="text-lg ml-2">Google 4.7</p>
        </div>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm">4.7</p>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} />
                  ))}
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3" style={{ backgroundColor: getRandomColor() }}>
                  <span className="text-white text-lg">{testimonial.name.charAt(0).toUpperCase()}</span>
                </div>
                <div className="text-sm font-semibold">{testimonial.name}</div>
              </div>
              <p className="text-gray-700 text-sm">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
        <Link href="/reviews" className="block text-center text-blue-600 mt-6 text-lg">
          View More
        </Link>
      </div>
    </div>
  );
}

export default Testimonial;
