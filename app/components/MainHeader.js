"use client";

import React, { useState } from "react";
import Image from "next/image";
import bellxLogo from '../../public/logo.svg'

export default function MainHeader() {
  const [isOpen, setisOpen] = useState(false);
  const handleNavClick = () => setisOpen(false);

  return (
    <nav className="w-full lg:p-0 animate-pulldown sticky top-0 bg-white z-50">
      <div className=" px-4 mx-auto lg:h-24 lg:items-center lg:flex lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:block">
            <a href="/">
              <Image
                src={bellxLogo}
                alt="Logo"
                className="w-[60px] h-[60px]  sm:w-[100px] sm:h-[100px]"
              />
            </a>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setisOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-8 lg:flex lg:items-center lg:space-y-0">
              <div className="flex flex-col gap-10 lg:flex lg:flex-row lg:gap-24">
                <div
                  className={`flex lg:flex lg:flex-row xl:gap-6 gap-4 ${
                    isOpen ? "flex-col" : "hidden"
                  }`}
                >
                  <div className="">
                    <a
                      href="/"
                      onClick={handleNavClick}
                      className="text-[#4A5568] font-medium hover:text-opacity-70 no-underline"
                    >
                      Home
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="/#services"
                      onClick={handleNavClick}
                      className="text-[#4A5568] font-medium hover:text-opacity-70 no-underline"
                    >
                      Services
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="/#about-us"
                      onClick={handleNavClick}
                      className="text-[#4A5568] font-medium hover:text-opacity-70 no-underline"
                    >
                      About us
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="/portfolio"
                      onClick={handleNavClick}
                      className="text-[#4A5568] font-medium hover:text-opacity-70 no-underline"
                    >
                      Find Jobs
                    </a>
                  </div>
                
                  <div className="">
                    <a
                      href="/steps-and-rules"
                      onClick={handleNavClick}
                      className="text-[#4A5568] font-medium hover:text-opacity-70 no-underline"
                    >
                      Steps & Rules
                    </a>
                  </div>
                </div>
                <div className={`mt-[-8px] lg:block ${isOpen ? "block" : "hidden"}`}>
                  <a
                    href="https://t.me/DHB1221"
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleNavClick}
                    className="text-white block text-center min-w-[120px] bg-gradient-to-r from-[#149895] to-[#1F73B5] p-2 rounded-sm shadow-md shadow-[#149895]/30 hover:shadow-[#1F73B5]/40 transition-shadow duration-200"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

//export default MainHeader;
