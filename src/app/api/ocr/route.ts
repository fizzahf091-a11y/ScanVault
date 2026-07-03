import { NextResponse } from "next/server";
import Tesseract from "tesseract.js";

export async function POST(request: Request) {
  try {
    const { image, documentType } = await request.json();

    if (!image) {
      return NextResponse.json({ error: "Image payload empty" }, { status: 400 });
    }

    // 1. Clean base64 prefix mapping
    const cleanBase64 = image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(cleanBase64, "base64");

    // 2. Clear async execution for dynamic routes
    const ocrResult = await Tesseract.recognize(
      buffer,
      "eng",
      {
        gzip: false // Next.js dynamic chunks environment compatibility ke liye
      }
    );

    const text = ocrResult.data?.text;

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Text read nahi ho saka. Picture thodi clear aur kareeb se lein." },
        { status: 400 }
      );
    }

    // 3. Simple block extraction mapping algorithms
    const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
    
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const phoneRegex = /(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4,7}/;

    let email = lines.find(l => emailRegex.test(l)) || "Not Detected";
    let phone = lines.find(l => phoneRegex.test(l)) || "Not Detected";

    // 4. Default dynamic payload parameters extraction fallback
    return NextResponse.json({
      success: true,
      data: {
        fullName: lines[0] || "Not Detected",
        designation: lines[1] || "Not Detected",
        company: lines[2] || "Not Detected",
        phone: phone !== "Not Detected" ? phone.match(phoneRegex)?.[0] : "Not Detected",
        email: email !== "Not Detected" ? email.match(emailRegex)?.[0] : "Not Detected",
        website: "www.eccountbook.com",
        address: lines.slice(3, 5).join(", ") || "Not Detected"
      }
    });

  } catch (err: any) {
    console.error("Local Worker Error: ", err);
    return NextResponse.json({ error: err.message || "OCR Runtime Error" }, { status: 500 });
  }
}