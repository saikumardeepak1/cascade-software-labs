import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import CascadeLoader from "@/components/CASCADE";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cascade Software Labs — Enterprise Agentic AI Solutions",
  description:
    "Pacific Northwest-based AI consultancy building enterprise-ready, secure, and cost-optimized Agentic AI solutions for modern enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CascadeLoader />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
