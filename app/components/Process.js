"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";

const Process = () => {
  const { t } = useLanguage();
  const steps = t("process.steps") || [];

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
