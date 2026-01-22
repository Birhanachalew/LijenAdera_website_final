const steps = [
  "መመዝገብ እና መረጃ ማስገባት",
  "ፍላጎት መለያየት እና መዋያ",
  "ስምምነት እና የጊዜ ማስረጃ",
  "መጀመሪያ ስብሰባ እና እቅድ ማቅረብ",
  "ክፍል እና ተከታታይ ክፍለ ሥራ",
  "ግምገማ እና አሻሻል",
];

const rules = [
  "ጊዜን መከበር እና ስምምነትን መከተል",
  "ክብር እና ትህትና መጠበቅ",
  "ንጽህና እና የአካባቢ ጥበቃ መከበር",
  "ግብረመልስ በግልጽ እና በሙያዊነት",
  "የመረጃ ጥበቃ መከበር",
];

export default function StepsAndRules() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,#E0E7FF,transparent_25%),radial-gradient(circle_at_80%_0%,#FDE68A,transparent_22%),radial-gradient(circle_at_50%_80%,#C7D2FE,transparent_25%)]" aria-hidden></div>
      <div className="relative w-full mx-auto px-4 py-14">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-[#0f172a]">
            የስራ ደረጃዎች እና ደንቦች
          </h1>
          <p className="text-[#334155] mb-10 text-lg leading-relaxed">
            ከመጀመር እስከ ማብቃት ድረስ የሥራ ሂደታችንን በተከታታይ እና በግልጽ ህጎች እናሳያለን። ይህ ገጽ ለቤተሰብና ለአስጠኚዎች የሥራ መመሪያዎችን ይገልጻል።
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="group p-6 border border-[#E7DAED] rounded-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.35)] bg-white/80 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgba(87,0,123,0.35)]">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#0f172a]">
                <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-[#6675F7] to-[#57007B] group-hover:scale-y-110 transition" aria-hidden></span>
                የስራ ደረጃዎች
              </h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 p-3 rounded-lg border border-transparent hover:border-[#E7DAED] transition duration-200 bg-white/60"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-[#6675F7] to-[#57007B] text-white font-semibold flex items-center justify-center shadow-md">
                      {index + 1}
                    </div>
                    <p className="text-[#334155] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="group p-6 border border-[#E7DAED] rounded-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.35)] bg-white/80 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgba(13,28,159,0.35)]">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#0f172a]">
                <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-[#0d1c9f] to-[#6AD6F0] group-hover:scale-y-110 transition" aria-hidden></span>
                ደንቦች
              </h2>
              <div className="space-y-4">
                {rules.map((rule) => (
                  <div
                    key={rule}
                    className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-[#E7DAED] transition duration-200 bg-white/60"
                  >
                    <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-[#0d1c9f] via-[#406AFF] to-[#6AD6F0] shadow-sm" aria-hidden></span>
                    <p className="text-[#334155] leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/#how-it-works"
              className="text-white bg-gradient-to-r from-[#6675F7] to-[#57007B] px-6 py-3 rounded-md shadow-lg text-center transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_30px_-10px_rgba(87,0,123,0.45)]"
            >
              እንዴት እንሰራ ይመልከቱ
            </a>
            <a
              href="/contact-us"
              className="text-white bg-gradient-to-r from-[#0d1c9f] via-[#406AFF] to-[#6AD6F0] px-6 py-3 rounded-md shadow-lg text-center transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_30px_-10px_rgba(13,28,159,0.45)]"
            >
              ያግኙን
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
