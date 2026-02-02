"use client";

export default function StepsAndRules() {
  const steps = [
    "ወላጆች በGoogle Form፣ Telegram ወይም በስልክ ይመዝገቡ",
    "የልጆችዎን ፍላጎት ፡ የልጅዎን እድሜ፣ ደረጃ፣ የመማር ፍላጎት በትክክል ያስቀምጡ",
    "አስጠኚዎች ስራ ከመጀመራቸዉ በፊት መስማማትዎን ያረጋግጡ።",
    "የመጀመሪያ ውይይት ከአስጠኚዎች ጋር ያድርጉ",
    "የጥናት ቦታውን ንጽህና እና ደህንነት ያረጋገጡ ",
    "አስተያየትዎን ወይም ቅሬታዎን ያቅርቡ፤ ካስፈለገ አስጠኚ ወይም እቅድ እንቀይራለን",
  ];

  const rules = [
    "ጊዜ ማከበር እና ህጎችን መከተል",
    "ወላጆች ማክብር እና በትህትና መስራት",
    "ከወላጆች እና ከተማሪዎች አስተያየት መቀበል፤ ",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,#E0E7FF,transparent_25%),radial-gradient(circle_at_80%_0%,#FDE68A,transparent_22%),radial-gradient(circle_at_50%_80%,#C7D2FE,transparent_25%)]" aria-hidden></div>
      <div className="relative w-full mx-auto px-4 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-[#0f172a]">
                ህግ እና ደንቦች
              </h1>
              <p className="text-[#334155] text-lg leading-relaxed">
                ለወላጆችና ለአስጠኚዎች የሥራ መመሪያዎችን ይመለከታል።
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="group p-6 border border-[#D4EDEA] rounded-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.35)] bg-white/80 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgba(20,152,149,0.35)]">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#0f172a]">
                <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-[#149895] to-[#1F73B5] group-hover:scale-y-110 transition" aria-hidden></span>
                ለወላጆች
              </h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 p-3 rounded-lg border border-transparent hover:border-[#E7DAED] transition duration-200 bg-white/60"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-[#149895] to-[#1F73B5] text-white font-semibold flex items-center justify-center shadow-md">
                      {index + 1}
                    </div>
                    <p className="text-[#334155] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="group p-6 border border-[#D4EDEA] rounded-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.35)] bg-white/80 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgba(31,115,181,0.35)]">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#0f172a]">
                <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-[#149895] to-[#6AD6F0] group-hover:scale-y-110 transition" aria-hidden></span>
                ለአስጠኚዎች
              </h2>
              <div className="space-y-4">
                {rules.map((rule) => (
                  <div
                    key={rule}
                    className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-[#E7DAED] transition duration-200 bg-white/60"
                  >
                    <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-[#149895] via-[#18BDBB] to-[#1F73B5] shadow-sm" aria-hidden></span>
                    <p className="text-[#334155] leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-14">
            <div className="rounded-2xl border border-[#D4EDEA] bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_-24px_rgba(0,0,0,0.3)] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-9 w-1.5 rounded-full bg-gradient-to-b from-[#149895] to-[#1F73B5]" aria-hidden></span>
                <h2 className="text-xl md:text-2xl font-semibold text-[#0f172a]">ይነበብ ‼ ‼ ‼ </h2>
              </div>
              <p className="text-[#334155] leading-relaxed mb-4">
                ልጀን አደራ ቤት ለ ቤት አስጠኚ አገናኚ ድርጅት።
              </p>
              <p className="text-[#334155] leading-relaxed mb-4">
                👋ሰላም እንዴት ናችሁ በድርጅታችን ሰም ሰላምታችን በያላችሁበት ይድረስ እያልን፤ ዛሬ ለተማሪ ወላጆች እና በአስጠኚነት በድርጅታችን ለተመደባችሁ ጎበዝ እና ታታሪ ለሆናችሁ አስጠኚዎቻችን በሙሉ በድርጅታችን ጸድቀው የወጡ መልዕክቶች ስላሉን እነሱን እናሳውቃለን በጥንቃቄ ይነበብ።
              </p>
              <p className="text-[#0f172a] font-semibold mb-3">ይነበብ ‼ ‼ ‼</p>
              <div className="space-y-3 text-[#334155] leading-relaxed">
                <p>
                  ♨ሁላችሁም የድርጅታችን አባላት እንደምታውቁት ድርጅታችን ጎበዝ እና የሰለጠኑ አስጠኚዎችን በመቅጠር አንቱ የተባለ እና ለተማሪዎቻችን የነገ ስኬታቸው ላይ ለማድረስ ቀን ከሌት እየሰራ ይገኛል።
                </p>
                <p>❎ታድያ ከትንሽ አመታት በፊት የተጀመረው የትምህር ስርዓት ተማሪዎቻችን እየፈተነ ተስፋ ወደማስቆረጡ ደርሶዓል።</p>
                <p>✅ታድያ በዚህ ስዓት ሁላችንም የቤት ውስጥ የመማር ማስተማሩን ሂደት በማሻሻል የተማሪዎቻችን ተስፋ መልሰን የነገ ተሰፋቸውን የሚያዩበትን ፋኖስ እናበራለን።</p>
                <p>ታድያ እሄ የሚሆነው በሚከተሉት ተግባራት ነው።</p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#0f172a] mb-3">🔴 አስጠኚ ሆናችሁ ለተመደባችሁ የወጣ ተግባር፦</h3>
                <ul className="list-disc list-inside space-y-2 text-[#334155]">
                  <li>🔺 አንዳንድ ምዕራፍ እንደጨረሳችሁ ሁልጊዜም የምዕራፉን ጠቅለል ያለ ሀሳብ የያዙ ጥያቄዎችን በማውጣት መፈተን።</li>
                  <li>🔺 አንዱ ምዕራፍ እንዳለቀ ሁልጊዜም ተማሪው የምዕራፉን ጠቅለል ያለ ማብራሪያ እንዲያደርግ ማድረግ።</li>
                  <li>🔺 ማጣቀሻ(አጋዥ) መጽሀፍትን ተጠቅመው እንዲሰሩ የሚያደርግ ጥያቄ በየቀኑ መስጠት።</li>
                  <li>🔺 ክፋል ውስጥ የሚሰጣቸውን የቤት ስራ እና አሳይመንት ቅድሚያ እነሱ እንዲሞክሩ ማድረግ።</li>
                  <li>🔺 በየቀኑ ምታጠኑትን በጥያቄ ማጠናከር።</li>
                  <li>🔺 ሁሌም አስጠንታችሁ ሰትወጡ ለቀጣይ ቀን ሰርተው ሚጠብቋችሁ ጥያቄ መስጠት አለባችሁ።</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#0f172a] mb-3">🔵 ለተማሪ ወላጆች የወጣ መልዕክት፦</h3>
                <ul className="list-disc list-inside space-y-2 text-[#334155]">
                  <li>🔹 ምቹ የሆነ(ፀጥ) ያለ የሚያጠኑበት ቦታ ማመቻቸት አለባችሁ።</li>
                  <li>🔹 ከላይ እንደምሳሌ የተቀመጡት ተግባራት እየተተገበሩ መሆኑን ማረጋገጥ።</li>
                  <li>🔹 ልጅዎ አስጠኚዎች ከመምጣታቸው በፊት የተሰጠውን የቤት ስራ እንዲሰራ ማድረግ።</li>
                  <li>🔹 አስጠኚዎች በሚመጡበት ስዕት ልጅዎ ለማጥናት እንዲዘጋጅ ማድረግ።</li>
                </ul>
              </div>

              <div className="mt-6 space-y-2 text-[#334155] leading-relaxed">
                <p>📶እነዚህ ከብዙዎቹ ጥቂቶቹ ናቸው።</p>
                <p>
                  አንተም፣ አንችም እኔም የተማሪ ልጆቻችን ጉዳይ ይመለከተኛል፤ የነሱ ጉዳይ የኔም ጉዳይ ነው በሚል መርህ የተሻለን ነገ እንፍጠር ይላል ድርጅታችን ልጀን አደራ ቤት ለ ቤት አስጠኚ አገናኚ ድርጅት።
                </p>
                <p>ሀሳብ አስተያየት ካለ እንቀበላለን Inbox me 🙏🙏🙏</p>
              </div>
            </div>
          </section>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="https://forms.gle/1hZCoW3efV6GcYHU8"
              target="_blank"
              rel="noreferrer"
              className="text-white bg-gradient-to-r from-[#149895] to-[#1F73B5] px-6 py-3 rounded-md shadow-lg shadow-[#149895]/30 text-center transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_30px_-10px_rgba(31,115,181,0.45)] w-full sm:w-auto"
            >
              ለአስጠኚዎች ይመዝገቡ
            </a>
            <a
              href="https://forms.gle/MoWnertcdxqs7bej6"
              target="_blank"
              rel="noreferrer"
              className="text-white bg-gradient-to-r from-[#1F73B5] via-[#18BDBB] to-[#6AD6F0] px-6 py-3 rounded-md shadow-lg shadow-[#149895]/30 text-center transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_30px_-10px_rgba(31,115,181,0.45)] w-full sm:w-auto"
            >
              ለወላጅ ይመዝገቡ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
