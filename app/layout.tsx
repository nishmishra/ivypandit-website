import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ivy Pandit | Ancient Wisdom & Modern Neuroscience',
  description: 'Ancient wisdom, modern neuroscience, Sanskrit, Indian Knowledge Systems, consciousness, and evidence-informed inquiry.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="top">
          <div className="language-links">
            <Link href="/">English</Link> | <Link href="/hi">हिन्दी</Link> | <Link href="/sa">संस्कृतम्</Link>
          </div>
          <div><a href="https://www.youtube.com/@IvyPandit">YouTube @IvyPandit</a> &nbsp; ✉ nishant.mishra@ivypandit.com</div>
        </div>
        <header className="brand">
          <Link href="/"><h1>IVY PANDIT</h1></Link>
          <p>Ancient Wisdom. Modern Neuroscience. Timeless Inquiry.</p>
        </header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/topics">Shastra Study</Link>
          <Link href="/research">Research</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/speaking">Speaking</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
        <footer className="footer">
          <h3>IVY PANDIT</h3>
          <p>Ancient Wisdom. Modern Neuroscience. Timeless Inquiry.</p>
          <p>nishant.mishra@ivypandit.com</p>
          <p><Link href="/hi">हिन्दी अनुवाद</Link> &nbsp; | &nbsp; <Link href="/sa">संस्कृतम् अनुवादः</Link></p>
          <p><a href="https://www.youtube.com/@IvyPandit">YouTube @IvyPandit</a></p>
        </footer>
      </body>
    </html>
  );
}
