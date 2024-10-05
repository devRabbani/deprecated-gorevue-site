import React from "react";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
