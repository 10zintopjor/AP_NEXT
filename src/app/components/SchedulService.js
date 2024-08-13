import React from 'react'

export default function SchedulService() {
  return (
   <>
   <div className='bg-red-800  md:py-0'>
        <div className='flex flex-col md:flex-row w-full justify-evenly items-center text-center md:text-left'>
          <div className='flex flex-col text-2xl md:text-3xl md:m-10 text-white'>
            <p className='m-2'>NEED PLUMBING SERVICE?</p>
            <p className='m-2'>CONTACT THE EXPERTS AT ARIA PLUMBING</p>
            <p className='m-2'>CALL US AT 647-765-7484</p>
          </div>
          <div className='flex items-center text-2xl md:text-3xl m-5 md:m-2'>
            <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent text-white border border-white hover:bg-white hover:text-customBlue transition duration-300">
              SCHEDULE SERVICE
            </button>
          </div>
        </div>
      </div>
   </>
  )
}
