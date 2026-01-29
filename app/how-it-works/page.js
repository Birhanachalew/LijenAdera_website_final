"use client";

import Process from "../components/Process";
import { useLanguage } from "../components/LanguageProvider";

export default function HowItWorksPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full mx-auto px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {t("howItWorksPage.title")}
        </h1>
        <p className="text-[#4A5568] mb-8">{t("howItWorksPage.description")}</p>

        <Process />

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/steps-and-rules"
            className="text-white bg-gradient-to-r from-[#149895] to-[#1F73B5] px-6 py-3 rounded-md shadow-lg shadow-[#149895]/30 text-center"
          >
            {t("howItWorksPage.stepsCta")}
          </a>
          <a
            href="https://t.me/DHB1221"
            target="_blank"
            rel="noreferrer"
            className="text-white bg-gradient-to-r from-[#1F73B5] via-[#18BDBB] to-[#6AD6F0] px-6 py-3 rounded-md shadow-lg shadow-[#149895]/30 text-center"
          >
            {t("howItWorksPage.contactCta")}
          </a>
        </div>
      </div>
    </div>
  );
}
