export default function Home() {
  return (
    <main>
      <section>
        <img src="/images/ivy-pandit-homepage-hero.png" alt="Ivy Pandit homepage featuring Dr. Nishant K Mishra" className="hero-image" />
      </section>

      <section className="section">
        <div className="cards home-cards">
          <div className="card"><div className="icon">🧠</div><h3>Neuroscience</h3><p>Research and insights into the brain, cognition, meditation, attention, and neurovascular health.</p><a href="/research">Explore →</a></div>
          <div className="card"><div className="icon">ॐ</div><h3>Sanatana Dharma</h3><p>Timeless wisdom from the Vedas, Upanishads, Bhagavad Gita, Mahabharata, Puranas, and more.</p><a href="/articles">Explore →</a></div>
          <div className="card"><div className="icon">📖</div><h3>Sanskrit Wisdom</h3><p>The beauty, philosophy, sound, memory, and scientific depth of Sanskrit literature.</p><a href="/articles">Explore →</a></div>
          <div className="card"><div className="icon">▶</div><h3>YouTube Videos</h3><p>Watch discussions on neuroscience, consciousness, Sanskrit, and Indian knowledge systems.</p><a href="https://www.youtube.com/@IvyPandit">Watch Now →</a></div>
        </div>
      </section>

      <section className="section">
        <div className="copy narrow">
          <h2>Three-Language Mission | त्रिभाषिक दृष्टि | त्रिभाषा-दृष्टिः</h2>
          <p>Ivy Pandit presents Indian knowledge systems through English, Hindi, and Sanskrit so that global audiences, Indian families, students, scholars, and seekers can engage with the same ideas at different levels of depth.</p>
          <div className="lang-grid">
            <div className="lang-card"><h3>English</h3><p>Modern neuroscience and Indian knowledge traditions in accessible, evidence-informed language.</p></div>
            <div className="lang-card"><h3>हिन्दी</h3><p className="devanagari">आधुनिक तंत्रिका-विज्ञान और भारतीय ज्ञान-परम्परा का सरल, प्रमाण-आधारित और सम्मानपूर्ण संवाद।</p></div>
            <div className="lang-card"><h3>संस्कृतम्</h3><p className="devanagari">आधुनिक-तन्त्रिका-विज्ञानस्य भारतीय-ज्ञान-परम्परायाः च प्रमाणसम्मतः, श्रद्धापूर्णः, विवेकपूर्णः संवादः।</p></div>
          </div>
        </div>
      </section>

      <section className="section about-grid" style={{background:"white", borderTop:"1px solid #eadfc7", borderBottom:"1px solid #eadfc7"}}>
        <div className="copy">
          <h2>About Dr. Nishant K. Mishra</h2>
          <p>Dr. Nishant K. Mishra, MD, PhD, is a neurologist, physician-scientist, thinker, educator, and Sanskrit enthusiast exploring the meeting point of modern neuroscience and Indian knowledge systems.</p>
          <p>Through Ivy Pandit, he presents evidence-informed discussions on consciousness, cognition, meditation, epigenetics, neuroplasticity, Sanskrit literature, and Sanatana Dharma.</p>
          <a className="button" href="/about">Read Full Biography</a>
        </div>
        <div className="quote">“Science teaches us how to ask questions rigorously; the great traditions of human civilization remind us which questions are worth asking.”</div>
      </section>

      <section className="section">
        <div className="copy">
          <h2>Phase 5 Knowledge Centers</h2>
          <p>Explore dedicated learning centers connecting shastra, neuroscience, psychology, leadership, consciousness, and Indian knowledge systems.</p>
        </div>
        <div className="article-grid">
          <div className="article-card"><span className="badge">Gita</span><h3>Bhagavad Gita Center</h3><p>Cognitive resilience, dharma, attention, action, and the psychology of crisis.</p><a href="/gita">Explore →</a></div>
          <div className="article-card"><span className="badge">Itihasa</span><h3>Mahabharata Center</h3><p>Leadership, conflict, decision-making, moral injury, and human complexity.</p><a href="/mahabharata">Explore →</a></div>
          <div className="article-card"><span className="badge">Purana</span><h3>Bhagavatam Center</h3><p>Devotion, consciousness, narrative wisdom, memory, and spiritual psychology.</p><a href="/bhagavatam">Explore →</a></div>
        </div>
      </section>

      <section className="section newsletter">
        <h2>Join The Ivy Pandit Letter</h2>
        <p>Receive new lectures, research reflections, Sanskrit insights, and updates on future courses and events.</p>
        <a className="button" href="mailto:nishant.mishra@ivypandit.com">Contact / Subscribe</a>
      </section>
    </main>
  );
}
