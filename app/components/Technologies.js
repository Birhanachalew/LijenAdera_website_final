"use client";

import Image from "next/image";
import React from "react";

const schools = [
  { name: "ዋን ፕላኔት ኢንተርናሽናል ስኩል", logo: "/one%20planet.jpg" },
  { name: "ካምብሪጅ", logo: "/cambridge.jpg" },
  { name: "ዳያሞንድ ስኩል", logo: "/diamondacademy.jpg" },
  { name: "ኢንዲያን ኢንተርናሽናል ስኩል", logo: "/indian.jpg" },
  { name: "ብሪቲሽ ኢንተርናሽናል ስኩል", logo: "/british.jpg" },
  { name: "ሳፋሪ", logo: "/safari.jpg" },
  { name: "ራዲካል ስኩል", logo: "/radical.jpg" },
  { name: "ናዛሬት ስኩል", logo: "/naziret.jpg" },
  { name: "ሳንድፎርድ ኢንተርናሽናል ስኩል", logo: "/sanford.jpg" },
  { name: "ቅዱስ ዮሴፍ ስኩል", logo: "/kidusyosef.jpg" },
  
];

const Technologies = () => {
  return (
    <div className="container mx-auto my-24 p-4">
      <div className="flex flex-col items-center mb-8">
        <hr className="bg-[#149895] h-1 w-16 my-3" />
        <p className="text-2xl font-semibold text-center">አጋር ትምህርት ቤቶች</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {schools.map((school) => (
          <div
            key={school.name}
            className="w-full max-w-xs rounded-lg border border-[#CDEDEA] bg-white px-4 py-6 text-center shadow-sm shadow-[#149895]/10"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={school.logo}
                alt={school.name}
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
            </div>
            <p className="text-lg font-semibold text-[#0F172A]">{school.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;