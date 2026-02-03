"use client";

import Image from "next/image";

export default function FounderContent() {
  return (
    <div className="w-full mx-auto px-4">
      <section className="max-w-6xl mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Photo styled like inspo (rounded ellipse card) */}
          <div className="relative h-[360px] md:h-[520px]">
            <div className="absolute inset-0 rounded-full overflow-hidden ring-4 ring-white/80 shadow-2xl">
              <Image
                src="/founder.JPG"
                alt="Founder Dehininet Huligzie"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[50%_10%]"
                priority
              />
            </div>
          </div>

          {/* Why + About founder script */}
          <div>
            <div className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-gray-900">
              Founder Story
            </div>
            <p className="text-base italic leading-relaxed mb-8 text-[#898CA9]">
             Dehninet Hulgizey founded ልጄን አደራ አስጠኚ አገናኚ ድርጅት after witnessing
              a real and painful gap : parents struggling to find tutors 
              who are not just qualified but honest, reliable, and truly
               committed to their children’s growth.
                From close experience, she realized that many 
                academic struggles don’t come from lack of ability, 
                but from the absence of proper guidance and trustworthy
                 mentorship.


            </p>

            <div className="text-xl md:text-2xl font-semibold tracking-tight mb-3 text-gray-900">
            Vision & Belief
            </div>
            <p className="text-base italic text-[#898CA9] leading-relaxed mb-6">
              Dehninet strongly believes that education works best
               when trust is at the center.
               Her mission is simple but powerful:
to build a system where parents feel confident, students feel supported, 
and tutors are held to high standards of integrity and responsibility.

She saw that creating a transparent, reliable,
 and values driven tutoring system could solve problems
  for many families and she acted on it.
            </p>

            <div className="mt-8">
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                Impact & Achievements
              </p>
              <p className="text-base italic leading-relaxed text-[#898CA9]">
                Since its founding, the company has supported 2000+ families,
                 connecting students with carefully selected tutors
                  and providing strategic academic guidance tailored to
                   each learner. As a result, many students have shown clear 
                   improvement in class performance, confidence, and grades.

Beyond student success, the platform has
 also created job opportunities 
for skilled tutors who were seeking 
meaningful and flexible work in education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
