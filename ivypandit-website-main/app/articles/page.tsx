export default function Articles() {
  return (
    <main>
      <section className="page-hero">
        <h1>Science & Shastra Articles</h1>
        <p>Thoughtful essays exploring Indian knowledge systems through modern scientific inquiry.</p>
      </section>
      <section className="section">
        <div className="article-grid">
          <div className="article-card">
            <span className="badge">Epigenetics</span>
            <h3>Garbhadhana Samskara & Epigenetics</h3>
            <p>Preconception health, parental environment, and the future of the child.</p>
            <a href="/articles/garbhadhana-epigenetics">Read →</a>
          </div>
          <div className="article-card">
            <span className="badge">Neuroplasticity</span>
            <h3>Gayatri Mantra & Neuroplasticity</h3>
            <p>Attention, mantra, meaning, sound, and the developing brain.</p>
            <a href="/articles/gayatri-neuroplasticity">Read →</a>
          </div>
          <div className="article-card">
            <span className="badge">Psychology</span>
            <h3>Bhagavad Gita & Cognitive Resilience</h3>
            <p>Arjuna’s crisis, Krishna’s guidance, and modern cognitive science.</p>
            <a href="/articles/gita-cognitive-resilience">Read →</a>
          </div>
        </div>
      </section>
    </main>
  );
}