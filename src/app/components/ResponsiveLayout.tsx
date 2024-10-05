'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface ResponsiveLayoutProps {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ mobile, desktop }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <>
      {isMobile ? mobile : desktop}
    </>
  );
};