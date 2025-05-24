import React from "react";
import testimonial from "../assets/testimonial.png";
const Testimonials = () => {
  return (
    <div className="min-h-screen max-w-full md:w-[85vw] mx-auto select-none">
<div className="flex flex-col justify-center items-center md:items-start mx-auto w-[85vw]">
 <div className="w-[90vw] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-roboto text-[#0E1F51] font-bold">
    Customer Testimonials
  </h1>
  <p className="text-[#0E1F51] text-sm sm:text-base md:text-lg py-4 font-normal">
    This tool has transformed my productivity and organization!
  </p>
</div>

    
      <div
  className="flex flex-col  md:flex-row lg:flex-row  bg-white border-[7px] md:border-[15px] border-[#ff4d4d] 
  w-full md:w-[600px] lg:w-[400px] h-auto lg:h-[500px] max-w-6xl mx-4 sm:mx-6 lg:mx-8 relative z-150"
>
  <div className="relative lg:absolute lg:top-5 lg:left-6 flex flex-col gap-5 md:gap-0 md:flex-row items-center w-full md:w-[80vw]">
    
    {/* Left Section */}
    <div className="flex-0 p-6 sm:p-10 md:p-8 lg:p-16 bg-white w-full  md:max-w-[680px] md:relative md:z-[900]">
      <p className="font-roboto text-[16px] sm:text-xl md:text-2xl lg:text-[32px] leading-[1.2] font-medium max-w-full md:max-w-lg ">
        Using this website has made my tasks so much easier! I can't imagine my day without it.
      </p>
      <div className="flex items-center mt-6 sm:mt-8">
        <div className="w-4 h-4 bg-[#ff4d4d] mr-4"></div>
        <div>
          <p className="text-base sm:text-lg font-bold">Sherri Cronin</p>
          <p className="text-sm sm:text-base text-gray-500">
            Project Manager, TechCorp
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-6 sm:mt-8">
        <button className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border-2 border-[#ff4d4d] rounded-full text-[#ff4d4d] text-lg sm:text-xl">
          {"<"}
        </button>
        <button className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center bg-[#ff4d4d] rounded-full text-white text-lg sm:text-xl">
          {">"}
        </button>
      </div>
    </div>

    {/* Right Section: Image */}
    <div className="p-6 sm:p-10 md:p-12 lg:p-16 lg:pt-0 lg:pt-12 h-full bg-white w-full  lg:-top-0 lg:right-20 lg:relative md:z-50">
      <img
        src={testimonial}
        alt="Testimonial"
        className="border-[5px] md:border-[15px] border-l-[#ff4d4d] md:border-l-transparent border-t-[#ff4d4d] border-r-[#ff4d4d] border-b-[#ff4d4d] object-cover 
        w-full h-[200px]  sm:h-[300px] lg:h-[350px]  lg:p-3"
      />
    </div>
  </div>
</div>

    </div>
    </div>

  );
};

export default Testimonials;
