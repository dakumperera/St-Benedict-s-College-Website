import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

type AdmissionRecord = {
  studentName?: string;
  grade?: string;
  dob?: string;
  address?: string;
  parentName?: string;
  phone?: string;
  email?: string;
  uploadedFile?: string | null;
  submittedAt: string;
};

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
    }

    // ✅ Ensure folders exist
    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const jsonPath = path.join(dataDir, "admissions.json");
    if (!fs.existsSync(jsonPath)) fs.writeFileSync(jsonPath, "[]", "utf-8");

    // ✅ Parse multipart form
    const form = new IncomingForm({
      multiples: false,
      uploadDir,
      keepExtensions: true,
    });

    const arrayBuffer = await req.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { Readable } = await import("stream");
    const stream = Readable.from(buffer);

    // formidable expects node-style headers
    (stream as any).headers = {
      "content-type": contentType,
      "content-length": buffer.length,
    };

    const parsed: any = await new Promise((resolve, reject) => {
      form.parse(stream as any, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    const fields = parsed.fields ?? {};
    const file = parsed.files?.file;

    // ✅ Build record
    const record: AdmissionRecord = {
      studentName: fields.studentName?.toString?.() ?? "",
      grade: fields.grade?.toString?.() ?? "",
      dob: fields.dob?.toString?.() ?? "",
      address: fields.address?.toString?.() ?? "",
      parentName: fields.parentName?.toString?.() ?? "",
      phone: fields.phone?.toString?.() ?? "",
      email: fields.email?.toString?.() ?? "",
      uploadedFile: file?.filepath ? path.relative(process.cwd(), file.filepath) : null,
      submittedAt: new Date().toISOString(),
    };

    // ✅ Append to JSON file
    let list: AdmissionRecord[] = [];
    try {
      const existing = fs.readFileSync(jsonPath, "utf-8");
      list = JSON.parse(existing || "[]");
      if (!Array.isArray(list)) list = [];
    } catch {
      list = [];
    }

    list.unshift(record); // newest first
    fs.writeFileSync(jsonPath, JSON.stringify(list, null, 2), "utf-8");

    return NextResponse.json({ ok: true, record });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}