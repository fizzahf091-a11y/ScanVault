"use client";

import ImagePreview from "./ImagePreview";
import { useEffect, useRef, useState } from "react";
import { Camera, Upload, Zap, ScanLine, RotateCcw } from "lucide-react";

interface CameraPreviewProps {
  onCaptureScan: (base64Image: string) => void;
  isScanning: boolean;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export default function CameraPreview({ 
  onCaptureScan, 
  isScanning, 
  currentStep, 
  setCurrentStep 
}: CameraPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [cameraReady, setCameraReady] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video.videoWidth === 0 || video.videoHeight === 0) {
      alert("Camera is not ready.");
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL("image/png");
    setCapturedImage(image);
    setCurrentStep(2);
  };

  const retakeImage = () => {
    setCapturedImage(null);
    setCurrentStep(1);
  };

  const continueScan = async () => {
    if (!capturedImage) return;
    onCaptureScan(capturedImage);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result as string);
        setCurrentStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          alert("Your browser does not support Camera API.");
          return;
        }

        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = async () => {
            try {
              await videoRef.current?.play();
              setCameraReady(true);
            } catch (err) {
              console.error(err);
            }
          };
        }
      } catch (err) {
        alert("Camera permission denied or camera not found.");
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <section className="mb-10">
      <div className="grid gap-6 lg:grid-cols-[2fr_320px]">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0B1120] p-5">
          <div className="relative overflow-hidden rounded-2xl">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="h-[500px] w-full rounded-2xl bg-black object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />

            <div className="absolute left-6 top-6 h-10 w-10 border-l-4 border-t-4 border-cyan-400" />
            <div className="absolute right-6 top-6 h-10 w-10 border-r-4 border-t-4 border-cyan-400" />
            <div className="absolute bottom-6 left-6 h-10 w-10 border-b-4 border-l-4 border-cyan-400" />
            <div className="absolute bottom-6 right-6 h-10 w-10 border-b-4 border-r-4 border-cyan-400" />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-5 py-2 text-sm font-medium text-green-400 backdrop-blur">
              {cameraReady ? "🟢 Camera Ready" : "🔴 Starting Camera..."}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-[#111827] p-7">
            <h3 className="mb-6 text-center text-lg font-semibold text-white">Controls</h3>
            <div className="grid grid-cols-3 gap-4 text-slate-400">
              <button className="rounded-2xl bg-slate-900 p-4 hover:bg-cyan-500 hover:text-white transition">
                <Zap className="mx-auto mb-2" size={24} />
                <span className="text-xs">Flash</span>
              </button>
              <button className="rounded-2xl bg-slate-900 p-4 hover:bg-cyan-500 hover:text-white transition">
                <ScanLine className="mx-auto mb-2" size={24} />
                <span className="text-xs">Auto</span>
              </button>
              <button className="rounded-2xl bg-slate-900 p-4 hover:bg-cyan-500 hover:text-white transition">
                <RotateCcw className="mx-auto mb-2" size={24} />
                <span className="text-xs">Flip</span>
              </button>
            </div>

            <button
              onClick={captureImage}
              disabled={isScanning}
              className="mt-8 flex h-28 w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl transition hover:scale-105 disabled:opacity-50"
            >
              <Camera size={40} />
            </button>
          </div>

          <div className="rounded-3xl border border-dashed border-cyan-500/30 bg-[#111827] p-8 text-center">
            <Upload size={40} className="mx-auto mb-4 text-cyan-400" />
            <h3 className="font-semibold text-white">Upload Image</h3>
            <p className="mt-2 text-sm text-gray-400">PNG, JPG, JPEG</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="mt-6 w-full cursor-pointer text-sm text-white file:mr-4 file:rounded-xl file:border-0 file:bg-cyan-500 file:px-5 file:py-3 file:text-white hover:file:bg-cyan-600"
            />
          </div>
        </div>
      </div>

      {capturedImage && (
        <ImagePreview
          image={capturedImage}
          onRetake={retakeImage}
          onContinue={continueScan}
        />
      )}
    </section>
  );
}