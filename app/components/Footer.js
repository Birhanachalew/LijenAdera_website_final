import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import bellxLogo from "../../public/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-to-r from-[#E6F7F6] to-[#E7F0FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 xl:justify-around">
          {/* Column 1 */}
          <div>
            <Image src={bellxLogo} alt="Company Logo" className="w-24" />
            <p className="text-lg mb-3">ልጀን አደራ ቤት ለ ቤት አስጠኚ አገናኚ ድርጅት</p>
            <p className="text-sm">
              ልጄን አደራ በእርግጠኝነት እና ባለሙያነት የትምህርት ጉዞውን ከእጅዎ ጋር ይመራል።
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex justify-center md:block">Links</h3>
            <div className="flex justify-center md:block">
            <ul className="text-sm  grid grid-cols-3 justify-between md:flex md:flex-col md:gap-y-1">
              <li>
                <a href="/about" className="hover:text-[#1F73B5] hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#1F73B5] hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-[#1F73B5] hover:underline">
                 Find Jobs
                </a>
              </li>
              
              <li>
                <div className="">
                    <a
                      href="https://t.me/LijenAderaTutor"
                      className="text-[#1F73B5] font-medium hover:text-opacity-70 no-underline"
                    >
                      Blog
                    </a>
                  </div>
              </li>
              
            </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact us</h3>
            <p className="text-sm mb-4 max-w-md">
              ጥያቄ አለዎት ወይስ በአገልግሎታችን ፍላጎት አለዎት? ዛሬ ያግኙን እና ውይይትን እንጀምር።
                እንረዳዎታለን።
            </p>
            <p className="text-sm">Phone: ☎️ 0988469108 |
 0953517272</p>
          </div>
        </div>

        {/* Social media icons */}
        <div className="mt-8 flex justify-center">
          <div className="bg-[#E1F5F4] text-[#1F73B5] rounded-full p-2 shadow-lg shadow-[#149895]/25 mx-2">
            <a href="https://www.linkedin.com/in/dehninet-hulgizey-4826b1364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedinIn size={16} />
            </a>
          </div>
          <div className="bg-[#E1F5F4] text-[#1F73B5] rounded-full p-2 shadow-lg shadow-[#149895]/25 mx-2">
            <a href="https://t.me/LijenAderaTutor">
              <FaTelegram size={16} />
            </a>
          </div>
          <div className="bg-[#E1F5F4] text-[#1F73B5] rounded-full p-2 shadow-lg shadow-[#149895]/25 mx-2">
            <a href="https://www.instagram.com/lijen_adera_tutoring?igsh=MW10Z28wYTRzcmJqbA==">
              <FaInstagram size={16} />
            </a>
          </div>
          <div className="bg-[#E1F5F4] text-[#1F73B5] rounded-full p-2 shadow-lg shadow-[#149895]/25 mx-2">
            <a href="https://www.facebook.com/profile.php?id=61585879345836">
              <FaFacebookF size={16} />
            </a>
          </div>
          <div className="bg-[#E1F5F4] text-[#1F73B5] rounded-full p-2 shadow-lg shadow-[#149895]/25 mx-2">
            <a href="https://tiktok.com/@user6033223266513">
              <FaTiktok size={16} />
            </a>
          </div>
        </div>
        <p className="text-center mt-8">
          © 2025 Copyright by ልጀን አደራ ቤት ለ ቤት አስጠኚ አገናኚ ድርጅት. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
