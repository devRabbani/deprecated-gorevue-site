import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="font-bold mb-3 text-lg">About Us</h4>
            <Link href="/about" className="block hover:text-secondary-color transition-colors pb-2">Learn More</Link>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-3 text-lg">Legal</h4>
            <Link href="/terms" className="block hover:text-secondary-color transition-colors pb-2">Terms of Service</Link>
            <Link href="/privacy" className="block hover:text-secondary-color transition-colors pb-2">Privacy Policy</Link>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-3 text-lg">Support</h4>
            <Link href="/help" className="block hover:text-secondary-color transition-colors pb-2">Help Center</Link>
          </div>
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="font-bold mb-3 text-lg">Contact</h4>
            <Link href="/contact" className="block hover:text-secondary-color transition-colors pb-2">Get in Touch</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2023 Revue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};