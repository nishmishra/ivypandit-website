import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ivy Pandit | Neuroscience & Sanatana Dharma",
  description: "Ivy Pandit explores neuroscience, consciousness, Sanskrit wisdom, Indian knowledge systems, and Sanatana Dharma.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}