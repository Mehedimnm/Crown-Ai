import type { Metadata } from "next";
import "./globals.css";
import MobileOnly from "@/components/MobileOnly";

export const metadata: Metadata = {
  title: "Crown AI - Premium Investment Platform",
  description: "ভবিষ্যতের আর্থিক স্বাধীনতা আপনার হাতের মুঠোয়",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <MobileOnly>
          {children}
        </MobileOnly>
      </body>
    </html>
  );
}
