import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";

const CHANNEL_USERNAME = process.env.TELEGRAM_CHANNEL_USERNAME || "LijenAderaTutor";

const getStorePath = () => path.join(process.cwd(), "data", "telegram-jobs.json");

const safeReadJobs = async () => {
  try {
    const raw = await readFile(getStorePath(), "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const safeWriteJobs = async (jobs) => {
  await writeFile(getStorePath(), JSON.stringify(jobs, null, 2));
};

const buildJobFromUpdate = (update) => {
  const post = update.channel_post;
  if (!post || !post.message_id) return null;

  const text = post.text || post.caption || "";
  if (!text.trim()) return null;

  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  const title = lines[0]?.slice(0, 80) || "New job post";
  const summary = lines.slice(1).join(" ").trim() || text;
  const postedAt = post.date ? new Date(post.date * 1000).toISOString() : null;

  return {
    id: `telegram-${post.message_id}`,
    title,
    summary,
    link: `https://t.me/${CHANNEL_USERNAME}/${post.message_id}`,
    postedAt,
    source: "telegram",
  };
};

export async function POST(request) {
  const update = await request.json();
  const job = buildJobFromUpdate(update);

  if (!job) {
    return NextResponse.json({ ok: true });
  }

  const jobs = await safeReadJobs();
  const exists = jobs.some((item) => item.id === job.id);

  if (!exists) {
    const nextJobs = [job, ...jobs].slice(0, 50);
    await safeWriteJobs(nextJobs);
  }

  return NextResponse.json({ ok: true });
}
