import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NesoHQ - Explore Beyond The Known Universe",
  description:
    "Empowering the next generation of builders, innovators, and dreamers through open, futuristic platforms that transcend boundaries.",
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Krakens Analytics */}
        <Script
          src="https://krakens.nesohq.org/krakens.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== 'undefined' && (window as any).Krakens) {
              (window as any).Krakens.init('hrd_2f181a4d20e8cfa185961c53d1f5fd6ad55b53ad5f21cf66ce3478ada571f0ae');
            }
          }}
        />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
