import Process from "../components/Process";

export default function HowItWorksPage() {
  return (
    <div className="w-full mx-auto px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">እንዴት እንሰራ</h1>
        <p className="text-[#4A5568] mb-8">
          ስራችንን በግልጽ ደረጃዎች እና ተከታታይ ሂደት እንያቀርብ እና ለእርስዎ የሚስማማ ውጤትን እንያመጣ እንሰራ።
        </p>

        <Process />

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/steps-and-rules"
            className="text-white bg-gradient-to-r from-[#6675F7] to-[#57007B] px-6 py-3 rounded-md shadow-lg text-center"
          >
            ደረጃዎችና ደንቦች ይመልከቱ
          </a>
          <a
            href="/contact-us"
            className="text-white bg-gradient-to-r from-[#0d1c9f] via-[#406AFF] to-[#6AD6F0] px-6 py-3 rounded-md shadow-lg text-center"
          >
            ያግኙን
          </a>
        </div>
      </div>
    </div>
  );
}
