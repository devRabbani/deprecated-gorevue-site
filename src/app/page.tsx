'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { HelpSection } from './components/HelpSection';
import { Footer } from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

const ResponsiveLayout = dynamic(() => import('./components/ResponsiveLayout').then(mod => mod.ResponsiveLayout), { ssr: false });

const HomePage: React.FC = () => {
  return (
    <AuthProvider>
      <div className="homepage">
        <Header />
        <HeroSection />
        <VisionSection />
        <HelpSection />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default function Home() {
  return (
    <ResponsiveLayout
      mobile={<HomePage />}
      desktop={<HomePage />}
    />
  );
}
