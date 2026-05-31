import type { Metadata } from "next";
import "./globals.css";
import { Nav, Footer } from "../components/Site";

export const metadata: Metadata = {
  title: "Ivy Pandit | Neuroscience & Sanatana Dharma",
  description: "Ivy Pandit explores neuroscience, consciousness, Sanskrit literature, epigenetics, meditation, and Indian knowledge systems through evidence-informed inquiry.",
  metadataBase: new URL("https://ivypandit.com"),
  openGraph: {
    title: "Ivy Pandit | Neuroscience & Sanatana Dharma",
    description: "Where modern neuroscience meets the living wisdom of Indian knowledge systems.",
    url: "https://ivypandit.com",
    siteName: "Ivy Pandit",
    images: [{ url: "/images/ivy-pandit-banner.png", width: 1920, height: 768 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivy Pandit | Neuroscience & Sanatana Dharma",
    description: "Neuroscience, consciousness, Sanskrit, and Indian knowledge systems.",
    images: ["/images/ivy-pandit-banner.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
