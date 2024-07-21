import React from 'react'
import Image from 'next/image';

export const Herosection = () => {
  return (
    <>
        <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-3xl mx-auto px-4">
      <div className="flex-1 text-left lg:pr-12 pt-20 max-w-3xl">
        <h1 className="font-inter font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight">
          <span className="text-[#FFBA00]">User-Centric Excellence:</span> 
          <span className="block mt-2 text-white">
            Our App Development Services Tackle Your Pain Points
          </span>
        </h1>
      </div>
      <div className="flex-shrink-0 lg:ml-24 mt-6 lg:mt-0">
        <img
          src="/Assets/комментарий к отзыву 1.png" // Update with your image path
          alt="Descriptive text"
          className="w-full max-w-xs lg:max-w-sm"
        />
      </div>
    </div>
      
  </div>
    </>
  )
}
export default Herosection;
