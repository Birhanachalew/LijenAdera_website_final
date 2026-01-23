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
            className="text-white bg-gradient-to-r from-[#149895] to-[#1F73B5] px-6 py-3 rounded-md shadow-lg shadow-[#149895]/30 text-center"
          >
            ደረጃዎችና ደንቦች ይመልከቱ
          </a>
          <a
            href="https://t.me/DHB1221"
            target="_blank"
            rel="noreferrer"
            className="text-white bg-gradient-to-r from-[#1F73B5] via-[#18BDBB] to-[#6AD6F0] px-6 py-3 rounded-md shadow-lg shadow-[#149895]/30 text-center"
          >
            ያግኙን
          </a>
        </div>
      </div>
    </div>
  );
}
