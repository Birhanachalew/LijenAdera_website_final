import React from "react";

// Addis Ababa coverage map with circular count badges and Amharic labels.
// Responsive, no Maps API key required (uses embed as a background).

const defaultMarkers = [
  { am: "አራዳ", en: "Arada", count: 25, top: 48, left: 48 },
  { am: "አዲስ ከተማ", en: "Addis Ketema", count: 30, top: 46, left: 40 },
  { am: "ልደታ", en: "Lideta", count: 15, top: 52, left: 44 },
  { am: "ክርኮስ", en: "Kirkos", count: 20, top: 55, left: 52 },
  { am: "ጉለሌ", en: "Gullele", count: 12, top: 36, left: 44 },
  { am: "የካ", en: "Yeka", count: 22, top: 42, left: 64 },
  { am: "ቦሌ", en: "Bole", count: 35, top: 58, left: 66 },
  { am: "ንፋስ ስልክ ላፍቶ", en: "Nifas Silk-Lafto", count: 18, top: 66, left: 48 },
  { am: "ኮልፌ ቀራኒዮ", en: "Kolfe Keranio", count: 14, top: 60, left: 36 },
  { am: "አቃኪ ቃሊቲ", en: "Akaki Kaliti", count: 16, top: 76, left: 56 },
];

function badgeSize(count) {
  if (count >= 30) return "h-12 w-12 text-sm";
  if (count >= 20) return "h-10 w-10 text-xs";
  return "h-8 w-8 text-[10px]";
}

function styleByCount(count) {
  if (count >= 30) return { ring: "ring-orange-500", text: "text-orange-700", dot: "bg-orange-500" };
  if (count >= 20) return { ring: "ring-teal-500", text: "text-teal-700", dot: "bg-teal-500" };
  return { ring: "ring-lime-500", text: "text-lime-700", dot: "bg-lime-500" };
}

export default function TutorCoverageMap({ markers = defaultMarkers }) {
  // Specific places (POIs) requested
  const poiMarkers = [
    { am: "ቦሌ", en: "Bole", count: 28, top: 57, left: 66, color: "bg-orange-500" },
    { am: "ሰሚት", en: "Summit", count: 16, top: 39, left: 72, color: "bg-teal-500" },
    { am: "አያት", en: "Ayat", count: 18, top: 34, left: 74, color: "bg-emerald-500" },
    { am: "ኮተቤ", en: "Kotebe", count: 14, top: 41, left: 70, color: "bg-cyan-500" },
    { am: "አራት ኪሎ", en: "Arat Kilo (4 Kilo)", count: 12, top: 48, left: 49, color: "bg-lime-500" },
    { am: "ስድስት ኪሎ", en: "Sidist Kilo (6 Kilo)", count: 15, top: 45, left: 52, color: "bg-green-500" },
    { am: "ሳርቤት", en: "Sarbet", count: 13, top: 65, left: 52, color: "bg-rose-500" },
    { am: "መገናኛ", en: "Megenagna", count: 17, top: 47, left: 62, color: "bg-sky-500" },
    { am: "ፒያሳ", en: "Piassa", count: 19, top: 49, left: 46, color: "bg-yellow-500" },
    { am: "ሲ.ኤም.ሲ.", en: "CMC", count: 15, top: 43, left: 68, color: "bg-indigo-500" },
    { am: "ጀሞ", en: "Jemo", count: 11, top: 70, left: 40, color: "bg-fuchsia-500" },
    { am: "ለቡ", en: "Lebu", count: 10, top: 72, left: 44, color: "bg-purple-500" },
    { am: "ገርጂ", en: "Gerji", count: 14, top: 61, left: 62, color: "bg-violet-500" },
    { am: "22 ማዞሪያ", en: "22 Mazoria", count: 16, top: 54, left: 60, color: "bg-blue-500" },
    { am: "ጉርድ ሾላ", en: "Gurd Shola", count: 13, top: 50, left: 68, color: "bg-cyan-600" },
    { am: "ሀያ ሁለት", en: "Hayahulet", count: 15, top: 52, left: 58, color: "bg-teal-600" },
    { am: "መክሲኮ", en: "Mexico", count: 18, top: 58, left: 46, color: "bg-amber-500" },
    { am: "ካዛንቺስ", en: "Kazanchis", count: 12, top: 55, left: 50, color: "bg-pink-500" },
    { am: "ጎፋ", en: "Gofa", count: 13, top: 62, left: 48, color: "bg-red-500" },
    { am: "ጀግና ማዕከል", en: "Gotera", count: 11, top: 60, left: 54, color: "bg-emerald-600" },
    { am: "ኦልድ ኤርፖርት", en: "Old Airport", count: 9, top: 64, left: 58, color: "bg-slate-600" },
    { am: "ቦሌ ራዋንዳ", en: "Bole Rwanda", count: 14, top: 60, left: 66, color: "bg-orange-600" },
    { am: "ቦሌ ሚካኤል", en: "Bole Michael", count: 12, top: 56, left: 64, color: "bg-orange-400" },
  ];

  const total = markers.reduce((s, m) => s + m.count, 0);
  const poiTotal = poiMarkers.reduce((s, m) => s + m.count, 0);

  return (
    <section className="w-full my-16">
      <div className="flex flex-col items-center text-center mb-6">
        <hr className="bg-[#149895] h-1 w-16 my-4" />
        <p className="text-2xl font-semibold">የማስተማር ክልሎቻችን (አዲስ አበባ)</p>
        <p className="text-sm text-[#4A5568] max-w-3xl px-4 mt-2">
          በአዲስ አበባ ውስጥ ያሉ ክፍለ ከተሞች ላይ የተመረጡ መረጃዎች። ቁጥሮቹ በቅርብ ጊዜ የተሰበሰቡ ናቸው እና ለማሳያ ዓላማ ብቻ ናቸው።
        </p>
      </div>

      <div className="relative w-full h-[300px] xs:h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px] overflow-hidden rounded-xl shadow-md">
        <iframe
          title="Addis Ababa Map"
          src="https://www.google.com/maps?q=Addis%20Ababa&hl=en&z=11&output=embed"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Badges — Sub-cities */}
        {markers.map((m) => {
          const { ring, text } = styleByCount(m.count);
          return (
            <div
              key={m.en}
              className="absolute flex flex-col items-center"
              style={{ top: `${m.top}%`, left: `${m.left}%`, transform: "translate(-50%, -50%)" }}
            >
              <div
                className={`${badgeSize(m.count)} ${text} bg-white rounded-full flex items-center justify-center ${ring} ring-4 shadow-md`}
              >
                +{m.count}
              </div>
              <span className="mt-1 text-[10px] sm:text-xs bg-white/90 backdrop-blur px-2 py-0.5 rounded shadow">
                {m.am}
              </span>
            </div>
          );
        })}

        {/* Badges — Specific Places (POIs) with colored fills */}
        {poiMarkers.map((m) => {
          const bg = m.color || "bg-teal-500";
          return (
            <div
              key={`poi-${m.en}`}
              className="absolute flex flex-col items-center"
              style={{ top: `${m.top}%`, left: `${m.left}%`, transform: "translate(-50%, -50%)" }}
            >
              <div
                className={`h-8 w-8 text-[10px] text-white ${bg} rounded-full flex items-center justify-center ring-4 ring-white/70 shadow`}
              >
                +{m.count}
              </div>
              <span className="mt-1 text-[10px] sm:text-xs bg-white/90 backdrop-blur px-2 py-0.5 rounded shadow">
                {m.am}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legend + Stats */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600 mt-4">
        <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full bg-lime-500" /> 10–19</div>
        <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full bg-teal-500" /> 20–29</div>
        <div className="flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full bg-orange-500" /> 30+</div>
        <div className="hidden sm:block h-4 w-px bg-gray-300" />
        <div className="font-medium">ጠቅላላ ተሳትፎ (ክፍለ ከተሞች)፡ +{total}</div>
        <div>ክፍለ ከተሞች፡ {markers.length}</div>
        <div className="hidden sm:block h-4 w-px bg-gray-300" />
        <div className="font-medium">ቦታዎች፡ {poiMarkers.length} | +{poiTotal}</div>
      </div>

      {/* Detailed list — Specific places (10) */}
      <div className="mt-6">
        <p className="text-sm text-gray-700 mb-2">የቦታ ዝርዝር (20+)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-sm">
          {poiMarkers.map((m) => {
            const dot = m.color || "bg-teal-500";
            return (
              <div key={`list-poi-${m.en}`} className="flex items-center justify-between gap-2 px-3 py-2 bg-white border border-gray-100 rounded-md shadow-sm">
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${dot}`} />
                  <span className="truncate" title={`${m.en}`}>{m.am}</span>
                </div>
                <span className="text-gray-700 font-medium">+{m.count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
