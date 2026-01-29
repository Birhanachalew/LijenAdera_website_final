"use client";

import Image from "next/image";
import { useLanguage } from "../components/LanguageProvider";

export default function FounderContent() {
  const { t } = useLanguage();

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
              {t("founderPage.whyTitle")}
            </div>
            <p className="text-base italic leading-relaxed mb-8 text-[#898CA9]">
              {t("founderPage.whyBody")}
            </p>

            <div className="text-xl md:text-2xl font-semibold tracking-tight mb-3 text-gray-900">
              {t("founderPage.aboutTitle")}
            </div>
            <p className="text-base italic text-[#898CA9] leading-relaxed mb-6">
              {t("founderPage.aboutBody")}
            </p>

            <div className="mt-8">
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                {t("founderPage.name")}
              </p>
              <p className="text-xs md:text-sm text-[#4A5568]">
                {t("founderPage.role")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
