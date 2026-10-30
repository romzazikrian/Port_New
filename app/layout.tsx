import type { Metadata, Viewport } from "next";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "M. Romza Zikrian - Web Developer - IT Support - Administration",
  description:
    "Portfolio of M. Romza Zikrian, specializing in modern web development, IT support, troubleshooting, administration, data processing, and documentation.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
