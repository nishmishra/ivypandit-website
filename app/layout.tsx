import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ivy Pandit | Neuroscience & Sanatana Dharma",
  description: "Ivy Pandit explores neuroscience, consciousness, Sanskrit wisdom, Indian knowledge systems, and Sanatana Dharma.",
};

function Header() {
  return (
    <>
      <div className="topbar">
        <div><a href="/">English</a> | <a href="/hi">हिन्दी</a> | <a href="/sa">संस्कृतम्</a></div>
        <div><a href="https://www.youtube.com/@IvyPandit">YouTube @IvyPandit</a> ✉ nishant.mishra@ivypandit.com</div>
      </div>
      <nav className="nav">
        <a href="/" className="logo">IVY PANDIT<small>Ancient Wisdom. Modern Neuroscience. Timeless Inquiry.</small></a>
        <div className="navlinks">
          <a href="/">Home</a><a href="/about">About</a><a href="/research">Research</a><a href="/articles">Articles</a><a href="/youtube">YouTube</a><a href="/contact">Contact</a>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div><strong>IVY PANDIT</strong><br />Ancient Wisdom. Modern Neuroscience. Timeless Inquiry.</div>
      <div>info@ivypandit.com<br />nishant.mishra@ivypandit.com<br /><a href="https://www.youtube.com/@IvyPandit">YouTube @IvyPandit</a></div>
      <div><a href="/">English</a><br /><a href="/hi">हिन्दी</a><br /><a href="/sa">संस्कृतम्</a></div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
