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
        <h3 className="text-xl mb-4 font-medium text-center">1. ቤት–ለ–ቤት የአስጠኚ አገልግሎት</h3>
        <p className="text-[#2D3748] mb-12">
          ልጄን አደራ ከተለያዩ ዩንቨርስቲዎች የተመረቁ፣ ልምድ ያላቸው መምህራንን በቀጥታ ወደ ቤትዎ ያገናኛል። ልጆች በግል ትኩረት እንዲማሩ ያግዛል እና የትምህርት ውጤታቸውን በተግባር ያሻሽላል።
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-[#CDEDEA] rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#149895] hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/web.svg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">2. በመስመር ላይ (Online) የአስጠኚ አገልግሎት</h3>
        <p className="text-[#2D3748] mb-12">
          ለጊዜ ወይም ለርቀት ችግኝ ያላቸው ተማሪዎች በZoom፣ Google Meet እና ሌሎች ቴክኖሎጂዎች የሚሰጥ ዘመናዊ የአስጠኚ አገልግሎት ነው። ተማሪዎች ከየትም ቦታ በቀላሉ መማር ይችላሉ።
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
          ብሔራዊ ፈተና፣ ዩንቨርሲቲ መግቢያ እና የክፍል ፈተናዎችን ለመዝጋጀት የተለየ የማስተማር እቅድ እንዘጋጃለን። ደካማ የሆኑ ክፍሎችን በመለየት ተማሪውን ወደ ከፍተኛ ውጤት እንመራለን።
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-[#CDEDEA] rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#149895] hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/graphics.jpg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">
          4. የአስጠኚ መቅጠር እና ማገናኘት (For Tutors)
        </h3>
        <p className="text-[#2D3748] mb-12">
          መምህራንና አስጠኚዎች በልጄን አደራ ስር ተመዝግበው ከተማሪዎች እና ወላጆች ጋር በቀጥታ ይገናኛሉ። የስራ እድል ይፈጥራል እና የተማሪ–አስጠኚ ግንኙነትን ያቀላጥፋል።
        </p>
      </div>
      <div className="w-[22rem] shadow-md px-4 pt-8 border border-[#CDEDEA] rounded-md mx-4 my-4 inset-0 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l hover:from-[#149895] hover:to-transparent">
        <div className="w-full flex justify-center ">
        <Image src="/testing.jpg" width={55} height={34} className="mb-4 flex justify-center" alt="" />
        </div>
        <h3 className="text-xl mb-4 text-center font-medium">5. ትምህርትን መሰረት ያደረጉ ማስታወቂያዎች እና ምክር</h3>
        <p className="text-[#2D3748] mb-12">
          የትምህርት ተቋማት፣ መምህራን እና ተዛማጅ ድርጅቶች ለሚፈልጉት ታማኝ እና ተፅዕኖ ያለው የማስታወቂያ እና የምክር አገልግሎት እንሰጣለን። መልዕክታችሁ ትክክለኛ ወደ ተጠቃሚው እንዲደርስ እንረዳለን።
        </p>
      </div>
    </div>
  );
}


export function Testimonials() {
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

  const feedback = [
    {
      id: "feedback-1",
      content:
        "By leveraging BellX's services, I have been able to establish a strong and compelling online presence. They have designed and developed a modern and user-friendly website that effectively showcases my tech products and engages my target audience. The website's intuitive navigation, visually appealing design, and seamless user experience have contributed to attracting more visitors and converting them into customers",
      name: "Kalkidan",
      title: "Owner of shop.org tech stor",
    },
    {
      id: "feedback-2",
      content:
        "Bellx software solution's team comprises highly skilled software engineers and developers with extensive expertise in various programming languages, frameworks, and technologies. ",
      name: "Daniel",
      title: "Software engineer",
    },
    {
      id: "feedback-3",
      content:
        "BellX is a highly supportive software development company that has played a crucial role in helping numerous clients establish a strong online presence through their expertly designed and developed websites. With their extensive experience and dedication to client success, BellX has proven to be a reliable partner in addressing the unique needs of businesses across various industries.",
      name: "Zelalem",
      title: "Running Car rental bussines",
    },
    {
      id: "feedback-4",
      content:
        "My gym members can easily access their workout routines and I can fulfill my commitment to ensuring their safety. BellX has provided a seamless solution that allows my gym members to conveniently access their personalized workout plans, track their progress, and stay motivated to achieve their fitness goals.",
      name: "kaleb",
      title: "GYM center owner",
    },
  ];

  return (
    <Slider {...settings}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Slider>
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
        "በጣም ደስ ብሎኛል፤ የላቁልን አስተማሪ በጣም ተጠያቂ እና ትኩረት የሚሰጥ በግብር ባለቤት ነች ስለዚህ በእኛ በኩል እጅግ አመስግናለሁ።",
      name: "ድንቅነሽ",
      title: "ወላጅ",
    },
    {
      id: "parent-2",
      content:
        "ልጄን አደራዎችን በጣም አመሰግናለው፤ ያገኙልኝ አስተማሪ በጣም ጥሩ ሰው ነው እና ከልጄ ጋርም በደንብ ተግባብቶለታል። እግዚአብሔር ይስጥልኝ።",
      name: "ሰማራዊት",
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
        "ሰላም ተና ይስጥልኝ። ድርጅታችን ልጄን አደራ አስተኚ ቡድን በጣም አሪፍ አፈጻጸም ያለው እና ምርት ቤተሰብ ያለው ድርጅት ነው፣ ስለዚህ በዚህ ቀጥል።",
      name: "በላይሁን",
      title: "አስጠኚ",
    },
    {
      id: "tutor-4",
      content:
        "ልጄን አደራ ጋር መስራት በጣም ጥሩ ልምድ ነበር። ቡድናቸው የሚያግዙ እና አስተማሪዎችን ከተማሪዎች ጋር በትክክል ማዛመድ ያውቃሉ። የሙያ ስርዓታቸው በማኅበራዊ ትምህርት ላይ ሙሉ ትኩረት እንድሰጥ ያደርገኛል፣ በጣም አስተዋይ ነው።",
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
