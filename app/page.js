"use client";

import { GoArrowRight } from "react-icons/go";
import CardSlider, { TestimonialsParents, TestimonialsTutors } from "./components/CardSlider";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import Image from "next/image";
import TutorCoverageMap from "./components/TutorCoverageMap";
import rocket from "../public/rocket.jpg";
import codeReview from "../public/code-review.jpg";
import quality from "../public/quality.jpg";
import security from "../public/security.jpg";
import proven from "../public/proven.jpg";
import developing from "../public/developing.jpg";
import aboutImage from "../public/about.jpg"

export default function Home() {
  return (
    <div className="w-full mx-auto px-4">
      <div className="text-white">
        <div
          className="w-full h-full absolute -z-10 top-0 left-0"
          aria-hidden="true"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/land3.jpg')" }}
          />
          {/* light black overlay for readability (approx 30/70 blend) */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 mb-20 min-h-[70vh] md:min-h-[60vh] pt-12 md:pt-20">
          <div className="w-full md:w-[48%] order-2 md:order-1">
            <div className="animate-appearup">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold">
                ልምድ ያላቸው አስጠኚዎችን ትፈልጋላችሁ? {" "}
                <span className="font-semibold bg-gradient-to-r from-[#149895] to-[#1F73B5] bg-clip-text text-transparent">
                  

                </span>{" "}
              
              </h1>

              <h1 className="font-extrabold text-xl md:3xl lg:text-5xl mb-8">
                ከልጄን አደራ አስጠኚ አገናኚ ድርጅት {" "}
                <span className="bg-gradient-to-r from-[#18BDBB] to-[#1F73B5] bg-clip-text text-transparent">
                  ብቁ እና የተመረጡ አስጠኚዎችን በፍጥነት ያገኛሉ:: 
                </span>
              </h1>
              <p className="text-white mb-12 font-semibold">
                በታማኝነት፣ በብቃት እና በተጠያቂነት ልጅዎን በአደራ የሚያስተማሩ ከተለያዩ 
                ዩኒቨርሲቲዎች የተመረቁ እና በሙያቸው ብቁነት ያላቸው አስጠኚዎችን
                 ለልጆችና ለተማሪዎች  እንመድባለን።
              </p>

            </div>

            <div className="w-full py-5 animate-moveleft flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/1hZCoW3efV6GcYHU8"
                target="_blank"
                rel="noreferrer"
                className="text-white bg-gradient-to-r from-[#149895] to-[#1F73B5] px-6 py-4 md:px-8 md:py-5 rounded-lg shadow-lg shadow-[#149895]/35 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-[#1F73B5]/40 transition-transform transition-shadow duration-200 w-full text-center"
              >
                ለአስጠኚዎች ይመዝገቡ፤
              </a>
              <a
                href="https://forms.gle/MoWnertcdxqs7bej6"
                target="_blank"
                rel="noreferrer"
                className="text-white bg-gradient-to-r from-[#1F73B5] via-[#18BDBB] to-[#6AD6F0] px-6 py-4 md:px-8 md:py-5 rounded-lg shadow-lg shadow-[#1F73B5]/35 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-[#18BDBB]/40 transition-transform transition-shadow duration-200 w-full text-center"
              >
                ለቤተሰብ ይመዝገቡ፤
              </a>
            </div>
          </div>
          <div className="w-full md:w-[48%] order-1 md:order-2 flex justify-center hidden" />
        </div>
      </div>

      <div
        id="services"
        className="flex flex-col mt-36 md:mt-16 mb-16 items-center"
      >
        <hr className="bg-[#149895] h-1 w-16 my-6" />
        <p className="text-2xl">our</p>
        <p className="text-2xl font-semibold">services</p>
      </div>
      <div>
        <CardSlider />
      </div>

      <div id="about-us" className="flex justify-around items-center mt-24">
        <div className="w-full md:w-2/5">
          <hr className="bg-[#149895] h-1 w-16 my-6" />
          <h4 className="text-3xl mb-12 font-medium">
             ልጄን አደራ  {" "}
            <span className="font-semibold">አስጠኚ አገናኚ ድርጅት</span>
          </h4>
          <p className="text-[#898CA9] mb-12">
          በ2015 ዓ.ም የተመሰረተ ሲሆን፣ በተለያዩ የዲግሪ እና የማስተርስ 
          {" "}
            <span className="bg-gradient-to-r from-[#149895] to-[#1F73B5] bg-clip-text text-transparent">
             ምሩቃን የሚመራ የትምህርት እና የሙያ አገልግሎት ሰጪ ድርጅት ነው።
            </span>{" "}
           ድርጅታችን በሚሰጣቸው አገልግሎቶች ወላጆች፣ ተማሪዎች፣ አስጠኚዎች እና የድርጅታችን ሰራተኞች በጋራ 
           በመተባበር የዘመናዊ የትምህርት አቀራረብን በመረዳት የተሻለ ውጤት ለማምጣት እየሰሩ ይገኛሉ።
            ዛሬ ላይ ተማሪዎችን በማጠናከር፣ የነገ ፋኖሳቸውን እንዲያበሩ እንረዳለን።

የምንሰጣቸው አገልግሎቶች ዋና ትኩረት ያደረጉት፣ ልምድ ያላቸው፣ የሰለጠኑ እና ከተለያዩ ዩኒቨርሲቲዎች 
የተመረቁ መምህራንን አስጠኚ ለሚፈልጉ ተማሪዎች በቤት-ለ-ቤት ወይም (Online) እንዲያገኙ ማድረግ ነው።

ከአስጠኚ አገልግሎት በተጨማሪ፣ በድርጅታችን ስር በተለያዩ የሙያ መስኮች የተማሩ እና ልምድ 
ያላቸው ባለሙያዎች ስለሚገኙ፣ በማንኛውም የሙያ መስክ ሰራተኛ ሲፈልጉ እኛን ማነጋገር ይችላሉ። 
ከእኛ ጋር ብዙ የተለያዩ ባለሙያዎች ይገኛሉ።

በተጨማሪም፣ ትምህርትን መሠረት ያደረጉ 
<span className="font-semibold">{" "}ማስታወቂያዎችን {" "}</span>
 እና የትምህርት ግንዛቤ የሚያጎሉ የሚዲያ ይዘቶችን እናዘጋጃለን።
          </p>
          <a
            href="https://t.me/LijenAderaTutor"
            target="_blank"
            rel="noreferrer"
            className="text-[#1F73B5]"
          >
            ተጨማሪ መረጃዎችን ይመልከቱ <GoArrowRight className="inline" />
          </a>
        </div>
        <Image src={aboutImage} alt="about-image" className="w-2/5 hidden md:block rounded-md" />
      </div>

        {/* Founder spotlight */}
        <div id="founder" className="mt-16 mb-12 w-full">
          <div className="relative overflow-hidden rounded-2xl border border-[#E7DAED] bg-gradient-to-r from-[#F7FCFC] via-white to-[#F0F4FF] shadow-xl">
            <div className="absolute -left-10 -top-12 h-40 w-40 rounded-full bg-[#149895]/12 blur-3xl" />
            <div className="absolute -right-12 -bottom-14 h-48 w-48 rounded-full bg-[#1F73B5]/12 blur-3xl" />

            <div className="relative grid gap-6 md:grid-cols-[220px,1fr] items-center p-6 md:p-10">
              <div className="flex items-center justify-center">
                <div className="relative h-48 w-48 rounded-full overflow-hidden ring-4 ring-white/80 shadow-lg">
                  <Image
                    src="/founder.JPG"
                    alt="Founder Dehninet Hulgizey"
                    fill
                    sizes="192px"
                    className="object-cover object-[50%_10%]"
                    priority
                  />
                </div>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#149895] mb-2">Founder</p>
                <h3 className="text-3xl font-medium mb-2">Dehninet Hulgizey</h3>
                <p className="text-[#898CA9] mb-4">Biomedical Engineer · Entrepreneur</p>
                <p className="text-[#898CA9] leading-relaxed">
                 ልጄን አደራን የጀመርኩት ፣ ወላጆች ታማኝ እና ብቁ አስጠኚ ማግኘት ምን ያህል ከባድ እንደሆነ በቅርብ ስለማየው ነው።
                  ብዙ ጊዜ የትምህርት ችግር ከእውቀት እጥረት ሳይሆን፣ ከትክክለኛ መመሪያ እና ከታማኝ አስጠኚ እጥረት እንደሚመጣ ተገነዘብኩ፡፡
                </p>
                <a href="/founder" className="inline-block mt-4 text-[#1F73B5] hover:underline">
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>

      {/* <div className="flex flex-col my-16">
        <hr className="bg-[#149895] h-1 w-16 my-6" />
        <p className="text-2xl">Meet the people</p>
        <p className="text-2xl font-semibold">we are working with</p>
      </div>
      <ClientSlider /> */}
      <div className="w-full my-20"></div>
      <div className="flex flex-col items-center my-16">
        <hr className="bg-[#149895] h-1 w-16 my-6" />
        <p className="text-2xl">የወላጆች ምስክርነት</p>
        <p className="text-2xl font-semibold">Parents' Testimonials</p>
      </div>
      <TestimonialsParents />

      <div className="flex flex-col items-center my-16">
        <hr className="bg-[#149895] h-1 w-16 my-6" />
        <p className="text-2xl">የአስጠኚዎች ምስክርነት</p>
        <p className="text-2xl font-semibold">Tutors' Testimonials</p>
      </div>
      <TestimonialsTutors />

      <div id="who-we-are" className="flex flex-col items-center my-16">
        <hr className="bg-[#149895] h-1 w-16 my-6" />
        <p className="text-2xl">ከልጄን አደራ አስጠኚ አገናኝ ድርጅት </p>
        <p className="text-2xl font-semibold"> ጋር መስራት ለምን ይጠቅማል?</p>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={rocket}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="ux-driven"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
             ታማኝ እና ሙሉ ብቃት ያላቸው አስጠኚዎች ያገኛሉ
            </p>
            <p className="text-[#4A5568]">
              ታማኝነት፣ ብቃት እና ተጠያቂነት ያላቸዉን
               ከተለያዩ ዩኒቨርሲቲዎች የተመረቁ እና በሙያቸው ብቁነት ያላቸው አስጠኚዎችን ያገኛሉ፡፡
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={developing}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="developing-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              ለልዩ ፈተናዎች ዝግጅት
            </p>
            <p className="text-[#4A5568]">
             ለብሔራዊ፣ ለዩኒቨርሲቲ መግቢያ እና ለክፍል ፈተናዎች  ተማሪዎች በቀላሉ እንዲዘጋጁ እናደርጋለን።
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={proven}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="proven-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              በአዲስ አበባ በሁሉም ክፍለ ከተሞች እንገኛለን
            </p>
            <p className="text-[#4A5568]">
             ቤት–ለ–ቤት እና Online አገልግሎት በሁሉም የአዲስ አበባ ክፍለ ከተሞች እንገኛለን፡፡
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={security}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="security-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
             ከፍተኛ ጥራት በተመጣጣኝ ዋጋ
            </p>
            <p className="text-[#4A5568]">
              ምርጥ አስጠኚዎችን  በተመጣጣኝ ዋጋ ከእኛ ያገኛሉ።
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={codeReview}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="code-review-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              የስራ ማስታወቂያዎች
            </p>
            <p className="text-[#4A5568]">
              በተለያዩ የሙያ መስኮች  የስራ ማስታወቂያዎች እናወጣለን።
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[49%] my-3 px-4 py-8 flex flex-col items-center sm:flex-row sm:items-start gap-6 border-[1px] border-[#E7DAED] rounded-sm shadow-md">
          <Image
            src={quality}
            height={40}
            width={40}
            className="sm:h-[60px] sm:w-[60px]"
            alt="quality-image"
          />
          <div>
            <p className="text-center sm:text-left font-semibold mb-3">
              ከወላጆች ጋር ግልጽ ግንኙነት
            </p>
            <p className="text-[#4A5568]">
              ምን እየተማረ እንዳለ፣ የት እንደደረሰ ፡ ግልጽ ዉይይት ከወላጆች ጋር ይደረጋል  ።
            </p>
          </div>
        </div>
      </div>

      <Technologies />

      <div id="how-it-works" className="flex flex-col items-center my-16">
        <hr className="bg-[#149895] h-1 w-16 my-6" />
        <p className="text-2xl">የልጄን አደራ አስጠኚ አገናኝ ድርጅት</p>
        <p className="text-2xl font-semibold">
           የአሰራር ሂደት 
        </p>
      </div>

      <Process />

      <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-r from-[#E6F7F6] to-[#E7F0FA] h-72 rounded-[20px]">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left w-[90%] md:w-2/5 lg:w-2/5 lg:min-w-0">
         በልጄን አደራ ድርጅት ስራ ለማግኘት ወይም ለልጆችዎ አስጠኚ ከፈለጉ አሁንኑ ይመዝገቡ
         ።
        </p>
        <a
          href="https://t.me/DHB1221"
          target="_blank"
          rel="noreferrer"
          className="text-white bg-gradient-to-r from-[#149895] to-[#1F73B5] px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-md mt-0 lg:mt-0 shadow-lg shadow-[#149895]/30 hover:shadow-[#1F73B5]/40 transition-shadow duration-200"
        >
          <span className="text-base sm:text-lg font-bold">
            Contact us
          </span>
        </a>
      </div>

      {/* Coverage Map: Where we've tutored (placed above footer) */}
      <TutorCoverageMap />
    </div>
  );
}
