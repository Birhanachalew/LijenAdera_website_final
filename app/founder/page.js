import Image from "next/image";

export const metadata = {
  title: "Founder | Lijen Adera",
  description: "About the founder of Lijen Adera",
};

export default function FounderPage() {
  return (
    <div className="w-full mx-auto px-4">
      <section className="max-w-6xl mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Photo styled like inspo (rounded ellipse card) */}
          <div className="relative h-[360px] md:h-[520px]">
            <div className="absolute inset-0 rounded-[200px] overflow-hidden shadow-2xl">
              <Image
                src="/founder.JPG"
                alt="Founder Dehininet Huligzie"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Why + About founder script */}
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why We Started</div>
            <p className="text-xl leading-relaxed mb-8">
              “We believe every learner deserves focused attention, clear guidance, and
              a supportive pathway to grow. Lijen Adera was founded to connect
              families with trusted tutors who care deeply about student progress
              and character, making quality learning accessible at home and online.”
            </p>

            <div className="text-3xl md:text-4xl font-bold tracking-tight mb-3">About the Founder</div>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Dehininet Huligzie is a Biomedical Engineer and Entrepreneur. She blends
              scientific rigor with practical compassion to design learning solutions
              that are reliable, personal, and measurable. Her vision is a city where
              families can easily find committed tutors and see steady results.
            </p>

            <div className="mt-8">
              <p className="text-2xl md:text-3xl font-semibold">Dehininet Huligzie — Founder</p>
              <p className="text-sm text-[#4A5568]">Biomedical Engineer · Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
