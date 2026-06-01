export default function Admin() {
  return <main>

      <section className="final-page-banner">
        <img src="/images/cultural-page-banner.png" alt="Ivy Pandit banner" />
      </section>

<section className="page-hero"><h1>Admin / Add Articles</h1><p>A simple editor cannot be safely placed on a public static website without authentication and a CMS. For now, this page gives you the safest direct paths to update content.</p></section><section className="section copy narrow"><div className="admin-note"><strong>Recommended:</strong> Use GitHub to add articles for now. Later, connect a CMS like Sanity, Contentful, Notion, or Decap CMS for direct browser editing.</div><h2>Add or Edit Articles</h2><p>Open your GitHub repository, create a new page under <strong>app/articles</strong>, commit changes, and Vercel will redeploy automatically.</p><p><a className="button" href="https://github.com/nishmishra/ivypandit-website" target="_blank">Open GitHub Repository</a></p><h2>Future Direct Editing</h2><p>To add articles directly from the website, the next step is to connect a secure CMS. I recommend Decap CMS or Sanity for Ivy Pandit.</p></section></main>;
}
