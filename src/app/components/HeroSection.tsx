"use client";

import React from "react";
import Link from "next/link";

import { Decorations } from "./Decorations";
import { useAuth } from "../contexts/AuthContext";
import { signIn } from "../lib/firebase";

export const HeroSection: React.FC = () => {
  const { user } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn();
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <section className="hero-section relative bg-gradient-to-r from-primary-color to-secondary-color text-white text-center py-20 overflow-hidden">
      <Decorations />
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Connect Creators with Brands
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto animate-fadeIn animation-delay-300">
          Revue: The platform that bridges the gap for successful collaborations
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/download"
            className="btn bg-white text-primary-color hover:bg-gray-100 transition-colors w-full sm:w-auto animate-fadeIn animation-delay-600"
          >
            Download App
          </Link>
          {!user && (
            <button
              onClick={handleLogin}
              className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary-color transition-colors w-full sm:w-auto animate-fadeIn animation-delay-900"
            >
              Login with Google
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
