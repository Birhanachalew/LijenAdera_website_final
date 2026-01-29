import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const readTelegramJobs = async () => {
  try {
    const filePath = path.join(process.cwd(), "data", "telegram-jobs.json");
    const raw = await readFile(filePath, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch (error) {
    return [];
  }
};

export async function GET() {
  const jobs = await readTelegramJobs();
  return NextResponse.json({ jobs });
}
