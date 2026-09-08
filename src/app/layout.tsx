import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Tangerine } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-tangerine",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veya — Harmony between you and forest",
  description:
    "Forest-inspired skincare with moss and spruce extract. Pure, natural, responsible beauty.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${tangerine.variable} ${jakarta.className} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-forest">
        {children}
      </body>
    </html>
  );
}
