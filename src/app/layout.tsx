import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveBackground } from "@/components/shared/InteractiveBackground";
import { Preloader } from "@/components/shared/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E2A'27 | Emerging Electronics and Automation",
  description: "Official website for the E2A'27 International Conference at NIT Silchar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // App is currently using the Futuristic Light Theme
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground selection:bg-primary/30 relative">
        {/* Elite High-End Preloader */}
        <Preloader />

        {/* Elite Dynamic Constellation & Parchment Background */}
        <InteractiveBackground />
        
        <Navbar />
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
