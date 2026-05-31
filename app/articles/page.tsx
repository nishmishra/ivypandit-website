export default function Articles() {
  return (
    <main>
      <section className="page-hero"><h1>Science & Shastra Articles</h1><p>Essays exploring Indian knowledge systems through modern scientific inquiry.</p></section>
      <section className="section">
        <div className="article-grid">
          <div className="article-card"><span className="badge">Epigenetics</span><h3>Garbhadhana Samskara & Epigenetics</h3><p>Preconception health and future generations.</p><a href="/garbhadhana">Read →</a></div>
          <div className="article-card"><span className="badge">Neuroplasticity</span><h3>Gayatri Mantra & Neuroplasticity</h3><p>Attention, mantra, meaning, sound, and the developing brain.</p><a href="/gayatri">Read →</a></div>
          <div className="article-card"><span className="badge">Psychology</span><h3>Bhagavad Gita & Cognitive Resilience</h3><p>Arjuna’s crisis, Krishna’s guidance, and cognitive science.</p><a href="/gita">Read →</a></div>
        </div>
      </section>
    </main>
  );
}
