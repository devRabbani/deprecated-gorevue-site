"use client";

import React, { useState, useEffect } from "react";
import { useZxing } from "react-zxing";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

export const QRScanPage: React.FC = () => {
  const [result, setResult] = useState("");
  const { user, loading } = useAuth();
  const router = useRouter();

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, loading, router]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary-color to-secondary-color text-white">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">QR Code Scanner</h1>
        <Link
          href="/"
          className="btn bg-white text-primary-color hover:bg-gray-100 transition-colors"
        >
          Back to Home
        </Link>
      </header>
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative aspect-square">
            <video
              ref={ref}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-4 border-white opacity-50 animate-pulse"></div>
          </div>
        </div>
        {result && (
          <div className="mt-8 w-full max-w-md bg-white text-gray-800 p-6 rounded-lg shadow-lg animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Scan Result:</h2>
            <p className="bg-gray-100 p-4 rounded break-all">{result}</p>
          </div>
        )}
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default QRScanPage;
