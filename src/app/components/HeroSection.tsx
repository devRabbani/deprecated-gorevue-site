"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Decorations } from "./Decorations";

export const HeroSection: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
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
          <motion.button
            onClick={toggleForm}
            className="btn bg-accent-color text-white hover:bg-accent-color-dark transition-colors w-full sm:w-auto animate-fadeIn animation-delay-1200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the waitlist
          </motion.button>
        </div>
        <AnimatePresence>
          {isFormVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto"
            >
              <iframe
                src="https://tally.so/r/mKJYd7?transparentBackground=1"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Join the waitlist"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
