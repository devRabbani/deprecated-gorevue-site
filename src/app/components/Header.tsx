"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../contexts/AuthContext";
import { signIn, signOut } from "../lib/firebase";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  const handleAuth = async () => {
    if (user) {
      await signOut();
    } else {
      try {
        await signIn();
      } catch (error) {
        console.error("Error during sign in:", error);
      }
    }
  };

  return (
    <header className="relative flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo">
        <Image src="/logo.png" alt="Revue Logo" width={100} height={40} />
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="/about"
          className="text-gray-600 hover:text-primary-color transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/blogs"
          className="text-gray-600 hover:text-primary-color transition-colors"
        >
          Blogs
        </Link>
        <Link
          href="/help"
          className="text-gray-600 hover:text-primary-color transition-colors"
        >
          Help
        </Link>
        {user && (
          <Link
            href="/qr-scan"
            className="text-gray-600 hover:text-primary-color transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
          </Link>
        )}
        {!loading && (
          <button
            onClick={handleAuth}
            className="btn btn-primary hover:bg-blue-600 transition-colors"
          >
            {user ? "Logout" : "Login"}
          </button>
        )}
      </nav>
      <div className="md:hidden flex items-center space-x-4">
        {user && (
          <Link
            href="/qr-scan"
            className="text-gray-600 hover:text-primary-color transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
          </Link>
        )}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white p-4 shadow-md animate-slideIn z-50">
          <div className="flex flex-col items-center">
            <Link
              href="/about"
              className="py-2 text-gray-600 hover:text-primary-color transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/blogs"
              className="py-2 text-gray-600 hover:text-primary-color transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/help"
              className="py-2 text-gray-600 hover:text-primary-color transition-colors"
            >
              Help
            </Link>
            {user && (
              <Link
                href="/qr-scan"
                className="py-2 text-gray-600 hover:text-primary-color transition-colors"
              >
                QR Scan
              </Link>
            )}
            {!loading && (
              <button
                onClick={handleAuth}
                className="btn btn-primary hover:bg-blue-600 transition-colors"
              >
                {user ? "Logout" : "Login"}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
