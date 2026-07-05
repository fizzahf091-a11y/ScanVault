import { NextResponse } from "next/server";
import { extractTextFromBase64 } from "@/lib/googleVision";

export async function POST(request: Request) {
  try {
    const { image, documentType } = await request.json();

    if (!image) {
      return NextResponse.json(
        {
          success: false,
          error: "Image not found.",
        },
        { status: 400 }
      );
    }

    // Google Vision OCR
    const extractedText = await extractTextFromBase64(image);

    if (!extractedText.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "No text detected.",
        },
        { status: 400 }
      );
    }

    console.log("========== GOOGLE OCR ==========");
    console.log(extractedText);
    console.log("===============================");

    const lines = extractedText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    let data;

    switch (documentType?.toLowerCase()) {
      case "business":
      case "businesscard":
      case "business card":
        data = extractBusinessCard(lines);
        break;

      case "cnic":
        data = extractCNIC(lines);
        break;

      case "passport":
        data = extractPassport(lines);
        break;

      default:
        data = {
          rawText: extractedText,
        };
    }

    return NextResponse.json({
      success: true,
      rawText: extractedText,
      data,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

/* ---------------------------- */
/* BUSINESS CARD                */
/* ---------------------------- */

function extractBusinessCard(lines: string[]) {
  const emailRegex =
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

  const phoneRegex =
    /(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,5}\)?[-.\s]?)?\d{3,5}[-.\s]?\d{3,5}[-.\s]?\d{0,5}/;

  const websiteRegex =
    /(www\.[^\s]+|https?:\/\/[^\s]+)/i;

  return {
    fullName: lines[0] || "Not Detected",

    designation: lines[1] || "Not Detected",

    company: lines[2] || "Not Detected",

    phone:
      lines.find((l) => phoneRegex.test(l))?.match(phoneRegex)?.[0] ||
      "Not Detected",

    email:
      lines.find((l) => emailRegex.test(l))?.match(emailRegex)?.[0] ||
      "Not Detected",

    website:
      lines.find((l) => websiteRegex.test(l))?.match(websiteRegex)?.[0] ||
      "Not Detected",

    address: lines.slice(3).join(", ") || "Not Detected",
  };
}

/* ---------------------------- */
/* CNIC                         */
/* ---------------------------- */

function extractCNIC(lines: string[]) {
  const cnicRegex = /\d{5}-\d{7}-\d/;

  const dobRegex =
    /\d{2}[./-]\d{2}[./-]\d{4}/;

  const cnic =
    lines.find((l) => cnicRegex.test(l))?.match(cnicRegex)?.[0] ||
    "Not Detected";

  const dates = lines
    .filter((l) => dobRegex.test(l))
    .map((l) => l.match(dobRegex)?.[0]);

  let fullName = "Not Detected";

  for (const line of lines) {
    const lower = line.toLowerCase();

    if (
      lower.includes("pakistan") ||
      lower.includes("identity") ||
      lower.includes("card") ||
      lower.includes("gender") ||
      lower.includes("birth") ||
      lower.includes("expiry") ||
      lower.includes("issue") ||
      lower.includes("signature")
    )
      continue;

    if (line.length > 4 && !cnicRegex.test(line)) {
      fullName = line;
      break;
    }
  }

  return {
    fullName,

    fatherName: "Not Detected",

    identityNumber: cnic,

    company: "NADRA",

    designation: "Identity Document",

    phone: "Not Detected",

    email: "Not Detected",

    website: "Not Detected",

    address: "Pakistan",

    dateOfBirth: dates[0] || "Not Detected",

    dateOfIssue: dates[1] || "Not Detected",

    dateOfExpiry: dates[2] || "Not Detected",
  };
}

/* ---------------------------- */
/* PASSPORT                     */
/* ---------------------------- */

function extractPassport(lines: string[]) {
  const passportRegex = /[A-Z]{1,2}\d{7,8}/;

  const dobRegex =
    /\d{2}[./-]\d{2}[./-]\d{4}/;

  const passportNo =
    lines.find((l) => passportRegex.test(l))?.match(passportRegex)?.[0] ||
    "Not Detected";

  const dates = lines
    .filter((l) => dobRegex.test(l))
    .map((l) => l.match(dobRegex)?.[0]);

  return {
    fullName: lines[2] || "Not Detected",

    passportNumber: passportNo,

    nationality: "Pakistan",

    company: "Government of Pakistan",

    designation: "Passport",

    phone: "Not Detected",

    email: "Not Detected",

    website: "Not Detected",

    address: "Pakistan",

    dateOfBirth: dates[0] || "Not Detected",

    issueDate: dates[1] || "Not Detected",

    expiryDate: dates[2] || "Not Detected",
  };
}