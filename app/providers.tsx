"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",

      offset: 200,
    });
  }, []);
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
