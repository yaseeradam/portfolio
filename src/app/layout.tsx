import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Yaseer K Adam | Full-Stack & Mobile Software Engineer",
  description: "Portfolio of Yaseer K Adam - Full-Stack Developer & Mobile Engineer specializing in Next.js, React, Node.js, Flutter, and AI Systems.",
  keywords: ["Yaseer Adam", "Yaseer K Adam", "Full-Stack Developer", "Next.js", "React", "Flutter", "Software Engineer", "Portfolio"],
  authors: [{ name: "Yaseer K Adam", url: "https://github.com/yaseeradam" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Yaseer K Adam | Full-Stack & Mobile Software Engineer",
    description: "Portfolio of Yaseer K Adam - Crafting high performance web & mobile applications.",
    url: "https://github.com/yaseeradam",
    siteName: "Yaseer Adam Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable} scroll-smooth dark`}>
      <body className="bg-[#0c0805] text-[#e6ded8] font-sans antialiased selection:bg-orange-500/30 selection:text-orange-300 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
