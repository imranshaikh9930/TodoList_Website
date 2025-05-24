import React from 'react'
import CTA from "../assets/CTA.png";

const CallToActions = () => {
  return (
   <div className="font-roboto grid grid-cols-1 md:grid-cols-2 w-[92vw] max-w-[1200px] mx-auto gap-6 items-center px-4 py-8 select-none">
  {/* Image Section */}
  <div className="flex justify-center">
    <img src={CTA} alt="CTA" className="w-full max-w-[500px] object-contain" />
  </div>

  {/* Text + Buttons Section */}
  <div className="flex flex-col gap-6 text-center md:text-left">
    <h1 className="text-[32px] md:text-[48px] font-bold leading-tight">
      Start Organizing Your Life Today
    </h1>
    <p className="text-gray-700">
      Join us now and transform your productivity with our intuitive to-do list platform!
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <button className="bg-[#FF3E54] px-6 py-3 text-white rounded-md">
        Sign Up
      </button>
      <button className="border-[#FF3E54] border-2 px-6 py-3 text-black rounded-md">
        Learn More
      </button>
    </div>
  </div>
</div>

  )
}

export default CallToActions