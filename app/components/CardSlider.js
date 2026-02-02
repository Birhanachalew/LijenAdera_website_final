"use client";

import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeedbackCard from "./FeedbackCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Previous testimonial"
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 text-[#149895] hover:text-[#1F73B5]"
  >
    <MdChevronLeft size={32} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Next testimonial"
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#149895] hover:text-[#1F73B5]"
  >
    <MdChevronRight size={32} />
  </button>
);

export default function CardSlider() {
 
  return (
    <div className="flex w-full flex-wrap justify-center">
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-[#CDEDEA] rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#149895] hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/digital.jpg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 font-medium text-center">1. ቤት–ለ–ቤት የማስጠናት አገልግሎት</h3>
        <p className="text-[#2D3748] mb-12">
          ልጄን አደራ አስጠኚ አገናኚ ድርጅት በተለያዩ ዩንቨርሲቲዎች የተመረቁ እና ልምድ ያላቸው መምህራንን በቀጥታ ወደ ቤትዎ 
          ይልካል ። ልጆች በትኩረት እንዲማሩ ያግዛል እና የትምህርት ውጤታቸውን በተግባር ያሻሽላል።
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-[#CDEDEA] rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#149895] hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/web.svg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">2.(Online) የማስጠናት አገልግሎት</h3>
        <p className="text-[#2D3748] mb-12">
          በ(Online) ማጥናት ለሚፈልጉ ተማሪዎች በZoom፣ Google Meet እና በሌሎች ቴክኖሎጂዎች የሚሰጥ ዘመናዊ የአስጠኚ አገልግሎት ነው። 
          ተማሪዎች ከየትም ቦታ በቀላሉ መማር ይችላሉ።
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-[#CDEDEA] rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#149895] hover:to-transparent">
      
        <div className="w-full flex justify-center ">
        <Image src="/mobile.svg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">
          3. የፈተና ዝግጅት እና የውጤት ማሻሻያ
        </h3>
        <p className="text-[#2D3748] mb-12">
          ብሔራዊ ፈተና፣ ዩንቨርሲቲ መግቢያ እና የክፍል ፈተናዎችን ለመዝጋጀት የተለየ የማስተማር እቅድ እንዘጋጃለን።
           የደከሙበትን የትምህርት አይነቶች በመለየት ተማሪዎችን ወደ ከፍተኛ ውጤት እንመራለን።
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-[#CDEDEA] rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#149895] hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/graphics.jpg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">
          4. አስጠኚ መቅጠር እና ማገናኘት (For Tutors)
        </h3>
        <p className="text-[#2D3748] mb-12">
          
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-[#CDEDEA] rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#149895] hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/testing.jpg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">5.የስራ ማስታወቂያ አገልግሎት </h3>
        <p className="text-[#2D3748] mb-12">
           ድርጅቶች ለሚፈልጉት ታማኝነት ያለው የማስታወቂያ አገልግሎት እንሰጣለን። 
          መልዕክታችሁ በትክክል ወደ ተጠቃሚው እንዲደርስ እንረዳለን።
        </p>
      </div>
    </div>
  );
}


export function TestimonialsParents() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 350,
    autoplay: true,
    autoplaySpeed: 1200,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "text-center",
  };

  const feedbackParents = [
    {
      id: "parent-1",
      content:
        "ልጄ በተለያዩ ትምህርቶች ዝቅተኛ ውጤት ነበረዉ፤ ከልጄን አደራ ጋር ከሰራን በኋላ ውጤቱ በአጭር ጊዜ ውስጥ ተሻሽሏል።",
      name: "ራሔል",
      title: "ወላጅ",
    },
    {
      id: "parent-2",
      content:
        "ልጄን አደራዎች በጣም አመሰግናለው በጣም ጥሩ ሰው ነው ያገኘሑት ከልጄ ጋርም በደንብ ተግባብተውል እግዚአብሔር ይስጥልኝ ።",
      name: "ሳምራዊት",
      title: "ወላጅ",
    },
    {
      id: "parent-3",
      content:
        "በጣም ደስተኛ ነን፤ የላኩልን አስተማሪ በጣም ሀላፊነት ያላት እና ትሁት የመልካም ስነ-ምግባር ባለቤት ናት፣ ስለዚህ በኔ በኩል አመሰግናለሁ።",
      name: "ድንቅነሽ",
      title: "ወላጅ",
    },
    {
      id: "parent-4",
      content:
        "እናመሰግናለን ልጄን አደራዎች : ለልጄ እጅግ ጥሩ አስጠኚ አግኝተናል፤ የልጄ የክፍል ውጤት በጥሩ ሁኔታ ተሻሽሏል።",
      name: "ሰሎሞን",
      title: "ወላጅ",
    },
    
  ];

  return (
    <Slider {...settings}>
      {feedbackParents.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Slider>
  );
}

export function TestimonialsTutors() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 350,
    autoplay: true,
    autoplaySpeed: 1200,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "text-center",
  };

  const feedbackTutors = [
    {
      id: "tutor-1",
      content:
        "የልጄን አደራ ድርጅትን ለታማኝነታቸው በጣም ማመስገን እፈልጋለሁ። ከወላጅ ጋር መስማማት ባለመቻላችን ሥራው ሳይሳካ ቢቀርም፣ ኤጀንሲው የከፈልኩትን ኮሚሽን በሙሉ በታማኝነት መልሶልኛል።",
      name: "ታየኝት",
      title: "አስጠኚ",
    },
    {
      id: "tutor-2",
      content:
        "Lijen Adera Astegni is a reliable and supportive tutor agency. They communicate well and value tutors and students. I am happy to work with them as a tutor.",
      name: "ነጻነት",
      title: "አስጠኚ",
    },
    {
      id: "tutor-3",
      content:
        "ሰላም ጤና ይስጥልኝ። ድርጅታችን ልጄን አደራ አስጠኚ ቡድን በጣም አሪፍ አፈጻጸም ያለው እና ምርጥ ቤተሰብ ያለው ድርጅት ነው፣ ስለዚህ በዚህ ቀጥሉ።",
      name: "በላይሁን",
      title: "አስጠኚ",
    },
    {
      id: "tutor-4",
      content:
        "ልጄን አደራ ጋር መስራት በጣም ጥሩ ልምድ አግኝቻለዉ። ቡድናቸው የሚያግዙ እና አስተማሪዎችን ከተማሪዎች ጋር በትክክል ማዛመድ ያውቃሉ። የሙያ ስርዓታቸው በማኅበራዊ ትምህርት ላይ ሙሉ ትኩረት እንድሰጥ እረድተዉኛል።",
      name: "ኤደን",
      title: "አስጠኚ",
    },
  ];

  return (
    <Slider {...settings}>
      {feedbackTutors.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Slider>
  );
}
