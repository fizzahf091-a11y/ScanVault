// import vision from "@google-cloud/vision";

// const client = new vision.ImageAnnotatorClient();

// export async function extractTextFromBase64(base64Image: string): Promise<string> {
//   try {
//     const buffer = Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), "base64");
//     const [result] = await client.textDetection({ image: { content: buffer } });
    
//     const detections = result.textAnnotations;
//     if (!detections || detections.length === 0) {
//       throw new Error("No text found in the image.");
//     }

//     return detections[0].description || "";
//   } catch (error) {
//     console.error("Google Vision OCR Error:", error);
//     throw error;
//   }
// }