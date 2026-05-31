export default function Home() {
  return (
    <main>
      <section>
        <img src="/images/ivy-pandit-homepage-hero.png" alt="Ivy Pandit Varanasi sunrise homepage" className="hero-image" />
      </section>

      <section className="section">
        <div className="cards home-cards">
          <div className="card"><div className="icon">🧠</div><h3>Gayatri & Neuroplasticity</h3><p>How mantra, meaning, sound, attention, and repetition may shape cognition.</p><a href="/articles">Learn More →</a></div>
          <div className="card"><div className="icon">👶</div><h3>Garbhadhana & Epigenetics</h3><p>Ancient preparation and modern biology of parental environment.</p><a href="/articles">Learn More →</a></div>
          <div className="card"><div className="icon">🕉</div><h3>Bhagavad Gita & Resilience</h3><p>Stress, clarity, duty, and cognitive resilience under uncertainty.</p><a href="/articles">Learn More →</a></div>
          <div className="card"><div className="icon">🏹</div><h3>Mahabharata & Leadership</h3><p>Leadership, conflict, ethics, and decision-making in complex situations.</p><a href="/articles">Learn More →</a></div>
          <div className="card"><div className="icon">📜</div><h3>Sanskrit & Cognition</h3><p>Language, memory, sound, precision, and contemplative learning.</p><a href="/articles">Learn More →</a></div>
        </div>
      </section>

      <section className="section about-grid" style={{background:"white", borderTop:"1px solid #f1c27d", borderBottom:"1px solid #f1c27d"}}>
        <img className="portrait" src="/images/dr-nishant-mishra.png" alt="Dr. Nishant K. Mishra" />
        <div className="copy">
          <h2>About Dr. Nishant K. Mishra</h2>
          <p>Dr. Nishant K. Mishra, MD, PhD, is a neurologist, physician-scientist, thinker, educator, and Sanskrit enthusiast exploring the meeting point of modern neuroscience and Indian knowledge systems.</p>
          <p>Through Ivy Pandit, he presents evidence-informed discussions on consciousness, cognition, meditation, epigenetics, neuroplasticity, Sanskrit literature, and Sanatana Dharma.</p>
          <a className="button" href="/about">Read Full Biography</a>
        </div>
      </section>

      <section className="section">
        <div className="copy narrow">
          <h2>Read in Three Languages</h2>
          <p>Ivy Pandit is designed for readers of English, Hindi, and Sanskrit.</p>
          <div className="lang-grid">
            <div className="lang-card"><h3>English</h3><p>Modern neuroscience and Indian knowledge traditions in accessible, evidence-informed language.</p><a className="button" href="/">English</a></div>
            <div className="lang-card"><h3>हिन्दी</h3><p className="devanagari">आधुनिक तंत्रिका-विज्ञान और भारतीय ज्ञान-परम्परा का सरल, प्रमाण-आधारित और सम्मानपूर्ण संवाद।</p><a className="button" href="/hi">हिन्दी</a></div>
            <div className="lang-card"><h3>संस्कृतम्</h3><p className="devanagari">आधुनिक-तन्त्रिका-विज्ञानस्य भारतीय-ज्ञान-परम्परायाः च प्रमाणसम्मतः संवादः।</p><a className="button" href="/sa">संस्कृतम्</a></div>
          </div>
        </div>
      </section>

      <section className="section newsletter">
        <h2>The Ivy Pandit Letter</h2>
        <p>Reflections on neuroscience, consciousness, Sanskrit, and Sanatana Dharma.</p>
        <a className="button" href="mailto:nishant.mishra@ivypandit.com">Subscribe / Contact</a>
      </section>
    </main>
  );
}
