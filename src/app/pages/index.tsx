import React from 'react';
import { ResponsiveLayout } from '../components/ResponsiveLayout';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { VisionSection } from '../components/VisionSection';
import { HelpSection } from '../components/HelpSection';
import { Footer } from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <VisionSection />
      <HelpSection />
      <Footer />
    </div>
  );
};

const Home: React.FC = () => (
  <ResponsiveLayout
    mobile={<HomePage />}
    desktop={<HomePage />}
  />
);

export default Home;