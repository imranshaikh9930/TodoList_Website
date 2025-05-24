import React, { useState } from 'react';
import logo from "../assets/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-raleway text-nowrap font-[600] relative flex flex-wrap sm:justify-start sm:flex-nowrap w-[85vw] mx-auto text-sm py-3 overflow-x-hidden">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between select-none">
        <img src={logo} alt="logo" className='w-[150px] h-auto' />
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow hover:bg-gray-50 focus:outline-none dark:bg-transparent dark:border-neutral-700 dark:text-black dark:hover:bg-white/10"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`transition-all duration-300 basis-full grow sm:flex sm:items-center sm:justify-end ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5 list-none select-none">
            {['About Us', 'Features', 'More Option', 'Contact'].map((text) => (
              <li key={text}>
                <a
                  href="#"
                  className="font-medium text-gray-600 hover:text-[#FF3E54] transition cursor-pointer"
                >
                  {text}
                </a>
              </li>
            ))}

            <li>
              <button className="text-[#FF3E54] px-6 py-2 rounded-md border border-[#FF3E54]">
                Login
              </button>
            </li>
            <li>
              <button className="bg-[#FF3E54] text-white px-6 py-2 rounded-md">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
