import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

export default function App() {
  return (
    <div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="w-[80%] mx-auto leading-relaxed text-base">
              Have a question or interested in our services? We&apos;re here to help
              you turn your ideas into reality
            </p>
          </div>
          <div className="w-[80%] lg:w-[65%] mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2 min-w-fit">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2 min-w-fit">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a
                  target="_blank"
                  href="mailto:bellxsoftwaresolution@gmail.com?subject=Seeking%20software%20solution"
                  className="text-indigo-500"
                >
                  bellxsoftwaresolution@gmail.com
                </a>
                <p className="leading-normal my-5">
                  King George VI St,
                  <br />
                  Addis Ababa 1000
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
                    <a href="https://www.linkedin.com/company/bellx-software-solution/">
                      <FaLinkedinIn size={16} />
                    </a>
                  </div>
                  <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
                    <a href="https://t.me/bellxsoftwaresolution">
                      <FaTelegram size={16} />
                    </a>
                  </div>
                  <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
                    <a href="https://www.instagram.com/bellx_software_solution/">
                      <FaInstagram size={16} />
                    </a>
                  </div>
                  <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
                    <a href="#">
                      <FaFacebookF size={16} />
                    </a>
                  </div>
                  <div className="bg-slate-200 rounded-full p-2 shadow-lg mx-2">
                    <a href="#">
                      <FaTwitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
