import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ivy Pandit | Neuroscience & Sanatana Dharma',
  description: 'Ancient wisdom, modern neuroscience, Sanskrit, consciousness, and evidence-informed inquiry.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="top">
          <div><Link href="/">English</Link> | <a href="#">हिन्दी</a> | <a href="#">संस्कृतम्</a></div>
          <div><a href="https://www.youtube.com/@IvyPandit">YouTube @IvyPandit</a> &nbsp; ✉ nishant.mishra@ivypandit.com</div>
        </div>
        <header className="brand">
          <Link href="/"><h1>IVY PANDIT</h1></Link>
          <p>Ancient Wisdom. Modern Neuroscience. Timeless Inquiry.</p>
        </header>
        <nav>
          <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/research">Research</Link><Link href="/articles">Articles</Link><Link href="/youtube">YouTube</Link><Link href="/contact">Contact</Link><Link href="/admin">Admin</Link>
        </nav>
        {children}
        <footer className="footer">
          <h3>IVY PANDIT</h3>
          <p>Ancient Wisdom. Modern Neuroscience. Timeless Inquiry.</p>
          <p>info@ivypandit.com<br/>nishant.mishra@ivypandit.com</p>
          <p><a href="https://www.youtube.com/@IvyPandit">YouTube @IvyPandit</a></p>
        </footer>
      </body>
    </html>
  );
}
