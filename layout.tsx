import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivy Pandit | Neuroscience & Sanatana Dharma",
  description:
    "Ivy Pandit explores neuroscience, consciousness, Sanskrit literature, epigenetics, meditation, and Indian knowledge systems through evidence-informed inquiry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
