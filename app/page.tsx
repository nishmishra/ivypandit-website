export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div>✉ info@ivypandit.com</div>
        <div>YouTube &nbsp; | &nbsp; Twitter</div>
      </div>

      <nav className="nav">
        <div className="logo">
          Ivy Pandit
          <small>Knowledge. Wisdom. Liberation.</small>
        </div>
        <div className="navlinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#science">Science & Shastra</a>
          <a href="#research">Research</a>
          <a href="#youtube">YouTube</a>
          <a href="#contact">Contact</a>
          <a className="button" href="#newsletter">Newsletter</a>
        </div>
      </nav>

      <section id="home">
        <img
          src="/images/ivy-pandit-homepage-hero.png"
          alt="Ivy Pandit homepage featuring Dr. Nishant K Mishra"
          className="hero-image"
        />
      </section>

      <section id="science" className="section">
        <div className="cards">
          <div className="card">
            <div className="icon">🧠</div>
            <h3>Neuroscience</h3>
            <p>Research and insights into the brain, cognition, meditation, attention, and neurovascular health.</p>
            <a href="#research">Explore →</a>
          </div>

          <div className="card">
            <div className="icon">ॐ</div>
            <h3>Sanatana Dharma</h3>
            <p>Timeless wisdom from the Vedas, Upanishads, Bhagavad Gita, Mahabharata, Puranas, and more.</p>
            <a href="#science">Explore →</a>
          </div>

          <div className="card">
            <div className="icon">📖</div>
            <h3>Sanskrit Wisdom</h3>
            <p>The beauty, philosophy, sound, memory, and scientific depth of Sanskrit literature.</p>
            <a href="#science">Explore →</a>
          </div>

          <div className="card">
            <div className="icon">▶</div>
            <h3>YouTube Videos</h3>
            <p>Watch discussions on neuroscience, consciousness, Sanskrit, and Indian knowledge systems.</p>
            <a href="#youtube">Watch Now →</a>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div>
          <h2>About Dr. Nishant K Mishra</h2>
          <p>
            Dr. Nishant K Mishra, MD PhD, is a neurologist, physician-scientist, educator, and Sanskrit enthusiast exploring the meeting point of modern neuroscience and Indian knowledge systems.
          </p>
          <p>
            Through Ivy Pandit, he presents evidence-informed discussions on consciousness, cognition, meditation, epigenetics, neuroplasticity, Sanskrit literature, and Sanatana Dharma.
          </p>
        </div>
        <div className="quote">
          “Ivy Pandit exists to explore ancient wisdom with intellectual honesty, scientific curiosity, and respect for the depth of Indian civilization.”
        </div>
      </section>

      <section id="research" className="section research">
        <h2>Research & Inquiry</h2>
        <p>
          Ivy Pandit will develop a research library connecting shastra, neuroscience, cognition, meditation, consciousness studies, and modern biomedical evidence.
        </p>
        <div className="research-grid">
          <div className="research-item">
            <h3>Garbhadhana & Epigenetics</h3>
            <p>Parental environment, stress biology, and intergenerational health.</p>
          </div>
          <div className="research-item">
            <h3>Gayatri & Neuroplasticity</h3>
            <p>Mantra, attention, sound, memory, and contemplative practice.</p>
          </div>
          <div className="research-item">
            <h3>Gita & Cognitive Resilience</h3>
            <p>Decision-making, emotional regulation, dharma, and leadership under stress.</p>
          </div>
        </div>
      </section>

      <section id="youtube" className="section">
        <h2>Featured YouTube Channel</h2>
        <p style={{fontFamily:"Arial, sans-serif", fontSize:"18px", lineHeight:1.7, color:"#334155"}}>
          Ivy Pandit shares lectures, visual essays, and research-based reflections on neuroscience, Sanskrit, and Sanatana Dharma.
        </p>
        <a className="button" href="https://www.youtube.com" target="_blank">Visit YouTube Channel</a>
      </section>

      <section id="newsletter" className="section newsletter">
        <h2>Join The Ivy Pandit Letter</h2>
        <p>Receive new lectures, research reflections, Sanskrit insights, and updates on future courses and events.</p>
        <a className="button" href="mailto:info@ivypandit.com">Contact / Subscribe</a>
      </section>

      <footer id="contact" className="footer">
        <div>Ivy Pandit © 2026</div>
        <div>Neuroscience • Sanskrit • Sanatana Dharma</div>
      </footer>
    </main>
  );
}