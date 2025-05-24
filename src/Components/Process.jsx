import React from "react";
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import p4 from "../assets/4.png";
const Process = () => {
  return (
    <div className="font-roboto  w-full md:w-[85vw] mx-auto flex justify-center flex-col items-center p-4 select-none">
      <h1 className="text-[24px] md:text-[40px] text-[#0E1F51] text-center font-bold sm:text-nowrap">
        Transform Your Productivity with Our <br /> Innovative To-Do List
        Features
      </h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-8 max-w-7xl mx-auto">
  {/* Card 1 */}
  <div className="relative bg-slate-100 w-full max-w-[300px] mx-auto px-5 py-6 rounded-lg shadow-md">
    <h1 className="text-[#0E1F51] opacity-20 absolute right-4 top-4 text-5xl select-none">01</h1>
    <img src={p1} alt="p1" className="w-[60px] object-contain my-4 bg-white p-2 rounded-xl" />
    <h1 className="text-lg font-semibold text-[#0E1F51] text-left mb-3 px-2">User-Friendly Interface</h1>
    <div className="flex items-center gap-2 mb-3 px-2">
      <span className="bg-[#FF3E54] w-[60px] h-[6px] rounded-xl"></span>
      <span className="bg-[#FF3E54] w-6 h-[6px] rounded-xl"></span>
    </div>
    <p className="text-sm text-gray-700 px-2">Our platform offers seamless task management to boost your efficiency.</p>
  </div>

  {/* Card 2 */}
  <div className="relative bg-slate-100 w-full max-w-[300px] mx-auto px-5 py-6 rounded-lg shadow-md">
    <h1 className="text-[#0E1F51] opacity-20 absolute right-4 top-4 text-5xl select-none">02</h1>
    <img src={p2} alt="p2" className="w-[60px] object-contain my-4  bg-white p-2 rounded-xl" />
    <h1 className="text-lg font-semibold text-[#0E1F51] text-left mb-3 px-2">Collaborate & Share Effortlessly</h1>
    <div className="flex items-center gap-2 mb-3 px-2">
      <span className="bg-[#FF3E54] w-[60px] h-[6px] rounded-xl"></span>
      <span className="bg-[#FF3E54] w-6 h-[6px] rounded-xl"></span>
    </div>
    <p className="text-sm text-gray-700 px-2">Invite team members to work together and achieve your goals faster.</p>
  </div>

  {/* Card 3 */}
  <div className="relative bg-slate-100 w-full max-w-[300px] mx-auto px-5 py-6 rounded-lg shadow-md">
    <h1 className="text-[#0E1F51] opacity-20 absolute right-4 top-4 text-5xl select-none">03</h1>
    <img src={p3} alt="p3" className="w-[60px] object-contain my-4  bg-white p-2 rounded-xl" />
    <h1 className="text-lg font-semibold text-[#0E1F51] text-left mb-3 px-2">Effortless Collaboration</h1>
    <div className="flex items-center gap-2 mb-3 px-2">
      <span className="bg-[#FF3E54] w-[60px] h-[6px] rounded-xl"></span>
      <span className="bg-[#FF3E54] w-6 h-[6px] rounded-xl"></span>
    </div>
    <p className="text-sm text-gray-700 px-2">Invite team members to work together and achieve your goals faster.</p>
  </div>

  {/* Card 4 */}
  <div className="relative bg-slate-100 w-full max-w-[300px] mx-auto px-5 py-6 rounded-lg shadow-md">
    <h1 className="text-[#0E1F51] opacity-20 absolute right-4 top-4 text-5xl select-none">04</h1>
    <img src={p4} alt="p4" className="w-[60px] object-contain my-4  bg-white p-2 rounded-xl" />
    <h1 className="text-lg font-semibold text-[#0E1F51] text-left mb-3 px-2">Seamless Access</h1>
    <div className="flex items-center gap-2 mb-3 px-2">
      <span className="bg-[#FF3E54] w-[60px] h-[6px] rounded-xl"></span>
      <span className="bg-[#FF3E54] w-6 h-[6px] rounded-xl"></span>
    </div>
    <p className="text-sm text-gray-700 px-2">Stay connected and manage your tasks on the go with ease.</p>
  </div>
</div>

    </div>
  );
};

export default Process;
