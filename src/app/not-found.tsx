import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
      <p className="text-2xl mb-8 text-center max-w-md">
        We&apos;re working hard to bring you something amazing. Stay tuned!
      </p>
      <div className="mb-8">
        <div className="w-64 h-2 bg-white rounded-full">
          <div className="w-1/2 h-full bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      <Link
        href="/"
        className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
