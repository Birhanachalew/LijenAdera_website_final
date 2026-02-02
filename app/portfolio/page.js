"use client";

import React, { useEffect, useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";

const jobs = [
  {
    id: "job-bole-bulbula-7",
    title: "ሴት/ወንድ አስጠኚ (7ኛ ክፍል)",
    location: "አዲስ አበባ ቦሌ ቡልቡላ",
    type: "ቤት ውስጥ",
    level: "Grade 7",
    summary: "በሳምንት 3 ቀን፣ በቀን 1:00 ሰዓት፣ TikTok አካውንት የተከተለ ብቻ ይመርጣል።",
    rate: "በስዓት 300 ብር (ወርሃዊ 3,600 ብር)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhp6zNifJUHgVqkJ08XqLVK5-wzthD34QLLkd0uPTqP2hlhg/viewform?usp=send_form",
  },
  {
    id: "job-kaliti-7",
    title: "ሴት አስጠኚ (7ኛ ክፍል)",
    location: "አዲስ አበባ ቃሊቲ አዲስ ሰፈር",
    type: "ቤት ውስጥ",
    level: "Grade 7",
    summary: "በሳምንት 3 ቀን፣ በቀን 1:00 ሰዓት፣ TikTok አካውንት የተከተለ ብቻ ይመርጣል።",
    rate: "በስዓት 300 ብር (ወርሃዊ 3,600 ብር)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhp6zNifJUHgVqkJ08XqLVK5-wzthD34QLLkd0uPTqP2hlhg/viewform?usp=send_form",
  },
  {
    id: "job-bole-bulbula-7-repeat",
    title: "ሴት/ወንድ አስጠኚ (7ኛ ክፍል)",
    location: "አዲስ አበባ ቦሌ ቡልቡላ",
    type: "ቤት ውስጥ",
    level: "Grade 7",
    summary: "በሳምንት 3 ቀን፣ በቀን 1:00 ሰዓት፣ TikTok አካውንት የተከተለ ብቻ ይመርጣል።",
    rate: "በስዓት 300 ብር (ወርሃዊ 3,600 ብር)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhp6zNifJUHgVqkJ08XqLVK5-wzthD34QLLkd0uPTqP2hlhg/viewform?usp=send_form",
  },
  {
    id: "job-gofa-9",
    title: "ሴት አስጠኚ (9ኛ ክፍል)",
    location: "አዲስ አበባ ጎፋ መብራት አካባቢ",
    type: "ቤት ውስጥ",
    level: "Grade 9",
    summary: "በሳምንት 3 ቀን፣ በቀን 1:30 ሰዓት።",
    rate: "ወርሃዊ 5,000 ብር",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhp6zNifJUHgVqkJ08XqLVK5-wzthD34QLLkd0uPTqP2hlhg/viewform?usp=send_form",
  },
  {
    id: "job-yeka-abado-7",
    title: "ሴት አስጠኚ (7ኛ ክፍል)",
    location: "አዲስ አበባ የካ አባዶ",
    type: "ቤት ውስጥ",
    level: "Grade 7",
    summary: "በሳምንት 3 ቀን፣ በቀን 1:00 ሰዓት፣ TikTok አካውንት የተከተለ ብቻ ይመርጣል።",
    rate: "በስዓት 300 ብር (ወርሃዊ 3,600 ብር)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhp6zNifJUHgVqkJ08XqLVK5-wzthD34QLLkd0uPTqP2hlhg/viewform?usp=send_form",
  },
  {
    id: "job-6killo-3-7",
    title: "ሴት አስጠኚ (3ኛ እና 7ኛ ክፍል)",
    location: "አዲስ አበባ 6 ኪ.ሜ",
    type: "ቤት ውስጥ",
    level: "Grade 3 & 7",
    summary: "በሳምንት 3 ቀን፣ በቀን 2:00 ሰዓት፣ TikTok አካውንት የተከተለ ብቻ ይመርጣል።",
    rate: "በስዓት 300 ብር (ወርሃዊ 7,200 ብር)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhp6zNifJUHgVqkJ08XqLVK5-wzthD34QLLkd0uPTqP2hlhg/viewform?usp=send_form",
  },
  {
    id: "job-alem-bank-9-12",
    title: "ሴት አስጠኚ (9ኛ እና 12ኛ Natural)",
    location: "አዲስ አበባ አለም ባንክ (ቤተል)",
    type: "ቤት ውስጥ",
    level: "Grade 9 & 12",
    summary: "በሳምንት 2 ቀን፣ በቀን 1:30 ሰዓት፣ TikTok አካውንት የተከተለ ብቻ ይመርጣል።",
    rate: "በስዓት 350 ብር",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhp6zNifJUHgVqkJ08XqLVK5-wzthD34QLLkd0uPTqP2hlhg/viewform?usp=send_form",
  },
  {
    id: "job-bole-bulbula-1",
    title: "ሴት አስጠኚ (1ኛ ክፍል)",
    location: "አዲስ አበባ ቦሌ ቡልቡላ",
    type: "ቤት ውስጥ",
    level: "Grade 1",
    summary: "በሳምንት 3 ቀን፣ በቀን 1:00 ሰዓት፣ TikTok አካውንት የተከተለ ብቻ ይመርጣል።",
    rate: "በስዓት 250 ብር (ወርሃዊ 3,000 ብር)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhp6zNifJUHgVqkJ08XqLVK5-wzthD34QLLkd0uPTqP2hlhg/viewform?usp=send_form",
  },
  {
    id: "job-meri-7-10",
    title: "ሴት/ወንድ አስጠኚ (10ኛ እና 7ኛ ክፍል)",
    location: "አዲስ አበባ መሪ",
    type: "ቤት ውስጥ",
    level: "Grade 7 & 10",
    summary: "በሳምንት 3 ቀን፣ በቀን 2:00 ሰዓት፣ TikTok አካውንት የተከተለ ብቻ ይመርጣል።",
    rate: "በስዓት 350 ብር",
    link: "https://t.me/DHB1221",
  },
  {
    id: "job-yeka-abado-7-repeat",
    title: "ሴት አስጠኚ (7ኛ ክፍል)",
    location: "አዲስ አበባ የካ አባዶ",
    type: "ቤት ውስጥ",
    level: "Grade 7",
    summary: "በሳምንት 3 ቀን፣ በቀን 1:00 ሰዓት፣ TikTok አካውንት የተከተለ ብቻ ይመርጣል።",
    rate: "በስዓት 300 ብር (ወርሃዊ 3,600 ብር)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhp6zNifJUHgVqkJ08XqLVK5-wzthD34QLLkd0uPTqP2hlhg/viewform?usp=send_form",
  },
];

const Page = () => {
  const [jobPosts, setJobPosts] = useState(jobs);
  const now = Date.now();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data.jobs) && data.jobs.length > 0) {
          setJobPosts(data.jobs);
        }
      } catch (error) {
        // fallback to static jobs
      }
    };

    loadJobs();
  }, []);

  return (
    <div className="w-[92%] mx-auto pb-16">
      <div className="flex flex-col my-12 text-center items-center">
        <hr className="bg-[#149895] h-1 w-16 my-4" />
        <p className="text-2xl font-semibold">የስራ ማስታወቂያዎች</p>
        <p className="text-[#4A5568] max-w-3xl mt-2">
          በልጄን አደራ ድርጅት የአስጠኚ ስራ እየፈለጉ ነዎት? እዚህ
           ዝርዝር ስራዎችን ይመልከቱ እና ያመልክቱ።
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {jobPosts.map((job) => (
          <div
            key={job.id}
            className="flex flex-col justify-between rounded-2xl border border-[#CDEDEA] bg-white p-6 shadow-sm shadow-[#149895]/10"
          >
            <div className="flex items-center justify-between mb-4">
              {job.type ? (
                <span className="text-sm font-semibold text-[#149895] bg-[#E6F7F6] px-3 py-1 rounded-full">
                  {job.type}
                </span>
              ) : (
                <span className="text-sm font-semibold text-[#149895] bg-[#E6F7F6] px-3 py-1 rounded-full">
                  Telegram
                </span>
              )}
              <div className="flex items-center gap-2">
                {job.postedAt && now - new Date(job.postedAt).getTime() < 24 * 60 * 60 * 1000 && (
                  <span className="text-xs font-semibold text-white bg-[#1F73B5] px-2 py-1 rounded-full">
                    አዲስ
                  </span>
                )}
                {job.location && <span className="text-sm text-[#4A5568]">{job.location}</span>}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            {job.level && (
              <p className="text-sm text-[#4A5568] mb-3">
                ደረጃ: {job.level}
              </p>
            )}
            <p className="text-[#2D3748] mb-2 leading-relaxed">{job.summary}</p>
            {job.rate && (
              <p className="text-sm font-semibold text-[#149895] mb-4">{job.rate}</p>
            )}
            <div className="flex justify-end">
              <a
                href={job.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-[#149895] to-[#1F73B5] px-4 py-2 rounded-md shadow-sm shadow-[#149895]/30 hover:shadow-[#1F73B5]/40"
              >
                Apply <LiaAngleRightSolid />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        <p className="text-[#2D3748] font-medium">
          ተጨማሪ የሥራ ማስታወቂያዎችን ለማየት ፦
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://t.me/DHB1221"
            target="_blank"
            rel="noreferrer"
            className="text-white bg-gradient-to-r from-[#149895] to-[#1F73B5] px-4 py-2 rounded-md shadow-sm shadow-[#149895]/30 hover:shadow-[#1F73B5]/40"
          >
            Telegram: ጥያቄዎች
          </a>
          <a
            href="https://t.me/LijenAderaTutor"
            target="_blank"
            rel="noreferrer"
            className="text-[#1F73B5] font-semibold underline"
          >
            ተጨማሪ የስራ ማስታወቂያ ቻናል
          </a>
        </div>
        <a
          href="https://t.me/LijenAderaTutor"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#149895] via-[#18BDBB] to-[#1F73B5] text-white font-semibold shadow-lg shadow-[#149895]/30 hover:shadow-[#1F73B5]/40 transition transform hover:-translate-y-0.5 hover:scale-[1.02] animate-pulse"
        >
          ተጨማሪ የስራ ማስታወቂያ channel
        </a>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-[#4A5568]">
          <span>መመሪያዎችን ይከተሉ</span>
          <span>•</span>
          <a
            href="https://www.tiktok.com/@user6033223266513?_t=ZM-8yTzRtZ1zpl&_r=1"
            target="_blank"
            rel="noreferrer"
            className="text-[#1F73B5] underline"
          >
            TikTok account Follow ያድርጉ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
