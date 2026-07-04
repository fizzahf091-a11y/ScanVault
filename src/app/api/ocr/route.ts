```typescript
import { NextResponse } from "next/server";
import { extractTextFromBase64 } from "@/lib/googleVision";

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json(
        { success: false, error: "No image provided." },
        { status: 400 }
      );
    }

    // Google Vision OCR
    const extractedText = await extractTextFromBase64(image);

    if (!extractedText || extractedText.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "No text detected in image.",
        },
        { status: 400 }
      );
    }

    console.log("========== GOOGLE VISION OCR ==========");
    console.log(extractedText);
    console.log("=======================================");

    const lines = extractedText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const emailRegex =
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

    const phoneRegex =
      /(?:\+?\d{1,3}[-.\s]?)?\(?\d{2,5}\)?[-.\s]?\d{3,5}[-.\s]?\d{3,5}/;

    const email =
      lines.find((line) => emailRegex.test(line)) || "Not Detected";

    const phone =
      lines.find((line) => phoneRegex.test(line)) || "Not Detected";

    return NextResponse.json({
      success: true,
      rawText: extractedText,
      data: {
        fullName: lines[0] || "Not Detected",
        designation: lines[1] || "Not Detected",
        company: lines[2] || "Not Detected",
        phone:
          phone !== "Not Detected"
            ? phone.match(phoneRegex)?.[0]
            : "Not Detected",
        email:
          email !== "Not Detected"
            ? email.match(emailRegex)?.[0]
            : "Not Detected",
        website: "Not Detected",
        address:
          lines.slice(3).join(", ") || "Not Detected",
      },
    });
  } catch (error: any) {
    console.error("Google Vision OCR Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "OCR failed.",
      },
      { status: 500 }
    );
  }
}
```
