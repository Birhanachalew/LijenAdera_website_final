import React from "react";

const Process = () => {
  const steps = [
    {
      title: "መመዝገብ (Register)",
      body: "ወላጆች፣ ተማሪዎች ወይም አስጠኚዎች በgoogle form ፡ Telegram ወይም በስልክ እንመዘግባለን፡፡",
    },
    {
      title: "ፍላጎት እና ደረጃ መለየት (Assess Needs & Level)",
      body: "የተማሪውን ዕድሜ፣ የትምህርት ደረጃ፣  የመማሪያ ፍላጎትና መንገድ (ቤት ለቤት ወይም Online) በጥልቅ እንመርመራለን። ",
    },
    {
      title: "ተመጣጣኝ አስጠኚ መምረጥ (Select the Right Tutor)",
      body: "በትምህርት ደረጃና በፍላጎት መሠረት የተረጋገጠ እና ታማኝ ልምድ ያለው አስጠኚ እንመርጣለን። ",
    },
    {
      title: "የትምህርት እቅድ ማዘጋጀት (Create a Personalized Learning Plan)",
      body: "ለተማሪው ብቻ የተስማማ የመማሪያ እቅድ እንዘጋጃለን፣ ይህም የደከሙበትን የትምህርት አይነቶች ለማሻሻልና ጠንካራ የሆኑባቸዉን የትምህርት አይነቶች ለማበረታታት ይረዳል። ",
    },
    {
      title: "ትምህርት መጀመር እና ክትትል (Start & Monitor Progress)",
      body: "ትምህርቱ በተስማሚ ጊዜ ይጀምራል፣ እኛም በቀጥታ ሂደቱን እንከታተላለን፣ ከወላጆች ጋር ተደጋጋሚ ግንኙነት እናደርጋለን። ",
    },
    {
      title: "ግምገማ እና ቀጣይ ማሻሻያ (Evaluate & Adjust)",
      body: "የተማሪውን ውጤት እንገምግማለን፣ ካስፈለገ አስጠኚ እንቀይራለን ወይም እቅድ ማሻሻያ እናደርጋለን።",
    },
  ];

  return (
    <div className="flex justify-around flex-wrap mb-24">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="bg-white rounded-[9px] border border-gray-300 px-4 py-6 m-4 max-w-sm"
        >
          <div className="flex items-center mb-2">
            <span className="bg-gradient-to-r from-[#149895] to-[#1F73B5] bg-clip-text text-transparent font-bold text-xl h-8 w-8 flex items-center justify-center mr-2">
              #{index + 1}
            </span>
            <h2 className="text-lg font-bold">{step.title}</h2>
          </div>
          <p className="text-[#4A5568]">{step.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Process;
