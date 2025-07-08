import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mochi - AI Companion for Emotional Support",
  description:
    "A compassionate AI chatbot designed to help people with avoidant attachment patterns build healthier relationships.",
  keywords: [
    "AI chatbot",
    "emotional support",
    "avoidant attachment",
    "mental health",
    "relationship therapy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-calm-50 to-mochi-50">
          {children}
        </div>
      </body>
    </html>
  );
}
