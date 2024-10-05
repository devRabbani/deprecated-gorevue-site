import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "../components/HeroSection";
import { VisionSection } from "../components/VisionSection";
import { HelpSection } from "../components/HelpSection";

const ResponsiveLayout = dynamic(
  () =>
    import("../components/ResponsiveLayout").then(
      (mod) => mod.ResponsiveLayout
    ),
  { ssr: false }
);

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <VisionSection />
      <HelpSection />
    </div>
  );
};

export default function Home() {
  return <ResponsiveLayout mobile={<HomePage />} desktop={<HomePage />} />;
}
