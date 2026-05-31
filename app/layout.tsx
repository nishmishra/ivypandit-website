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
        <div>✉ nishant.mishra@ivypandit.com</div>
        <div>YouTube &nbsp; | &nbsp; Research &nbsp; | &nbsp; Sanskrit Wisdom</div>
      </div>
      <nav className="nav">
        <a href="/" className="logo">
          Ivy Pandit
          <small>Knowledge. Wisdom. Liberation.</small>
        </a>
        <div className="navlinks">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/research">Research</a>
          <a href="/publications">Publications</a>
          <a href="/articles">Articles</a>
          <a href="/youtube">YouTube</a>
          <a href="/contact">Contact</a>
          <a className="button" href="/contact">Newsletter</a>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>Ivy Pandit © 2026</div>
      <div>Neuroscience • Sanskrit • Sanatana Dharma</div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}