import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Zaini Muhtarom - Fullstack Web Developer",
  description: " Passionate about building scalable web applications, optimizing system performance, and delivering user-centric digital solutions with intuitive interfaces.",
  keywords: "Zaini Muhtarom, Fullstack Web Developer, React.js, Javascript, Typescript , Laravel, PHP, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Zaini Muhtarom" }],
  openGraph: {
    title: "Zaini Muhtarom - Web Developer",
    description: "Portfolio of Zaini Muhtarom, a passionate fullstack-web developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
