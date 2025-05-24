import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/LinkedIn.png";
import youtube from "../assets/Youtube.png";
import X from "../assets/vector.png";

const Footer = () => {
  return (
    <div className="font-roboto w-full md:w-[85vw] md:mx-auto px-3 py-2  sm:px-6 sm:py-10 bg-white select-none">
      {/* Upper Footer */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <img src={logo} alt="logo" className="w-[150px] mb-4" />
          <p className="text-gray-700 mb-4">
            Subscribe to our newsletter for the latest features and updates <br />
            delivered to you.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="text"
              placeholder="Your Email Here.."
              className="py-2 px-4 border border-black text-[#666666] w-full sm:w-auto"
            />
            <button className="bg-[#FF3E54] px-6 py-2 text-white rounded-md w-full sm:w-auto">
              Join
            </button>
          </form>

          <small className="text-sm text-gray-600">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </small>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-2">Useful Links</h4>
            <ul className="text-gray-700">
              <li className="py-1">Home Page</li>
              <li className="py-1">About Us</li>
              <li className="py-1">Contact Us</li>
              <li className="py-1">Blog Posts</li>
              <li className="py-1">FAQs</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-2">Resources</h4>
            <ul className="text-gray-700">
              <li className="py-1">Help Center</li>
              <li className="py-1">User Guide</li>
              <li className="py-1">Community Forum</li>
              <li className="py-1">Feedback</li>
              <li className="py-1">Support</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-2">Connect With Us</h4>
            <ul className="text-gray-700">
              <li className="flex items-center gap-3 py-1">
                <img src={facebook} alt="Facebook" className="w-5 h-5" />
                Facebook
              </li>
              <li className="flex items-center gap-3 py-1">
                <img src={instagram} alt="Instagram" className="w-5 h-5" />
                Instagram
              </li>
              <li className="flex items-center gap-3 py-1">
                <img src={X} alt="X" className="w-5 h-5" />
                X
              </li>
              <li className="flex items-center gap-3 py-1">
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                LinkedIn
              </li>
              <li className="flex items-center gap-3 py-1">
                <img src={youtube} alt="YouTube" className="w-5 h-5" />
                YouTube
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="max-w-[1200px] mx-auto mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between text-sm gap-4 text-gray-600">
        <p>© 2024 Osumare. All rights reserved.</p>
        <ul className="flex gap-4 flex-wrap justify-center">
          <li className="underline cursor-pointer">Privacy Policy</li>
          <li className="underline cursor-pointer">Terms of Service</li>
          <li className="underline cursor-pointer">Cookie Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
