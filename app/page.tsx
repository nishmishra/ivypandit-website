export default function Home() {
  return (
    <main>
      <section>
        <img
          src="/images/ivy-pandit-homepage-hero.png"
          alt="Ivy Pandit homepage featuring Dr. Nishant K Mishra"
          className="hero-image"
        />
      </section>

      <section className="section">
        <div className="cards">
          <div className="card">
            <div className="icon">🧠</div>
            <h3>Neuroscience</h3>
            <p>Research and insights into the brain, cognition, meditation, attention, and neurovascular health.</p>
            <a href="/research">Explore →</a>
          </div>
          <div className="card">
            <div className="icon">ॐ</div>
            <h3>Sanatana Dharma</h3>
            <p>Timeless wisdom from the Vedas, Upanishads, Bhagavad Gita, Mahabharata, Puranas, and more.</p>
            <a href="/articles">Explore →</a>
          </div>
          <div className="card">
            <div className="icon">📖</div>
            <h3>Sanskrit Wisdom</h3>
            <p>The beauty, philosophy, sound, memory, and scientific depth of Sanskrit literature.</p>
            <a href="/articles">Explore →</a>
          </div>
          <div className="card">
            <div className="icon">▶</div>
            <h3>YouTube Videos</h3>
            <p>Watch discussions on neuroscience, consciousness, Sanskrit, and Indian knowledge systems.</p>
            <a href="/youtube">Watch Now →</a>
          </div>
        </div>
      </section>

      <section className="section about-grid" style={{background:"white", borderTop:"1px solid #eadfc7", borderBottom:"1px solid #eadfc7"}}>
        <div className="copy">
          <h2>About Dr. Nishant K. Mishra</h2>
          <p>
            Dr. Nishant K. Mishra, MD PhD, is a neurologist, physician-scientist, educator, and Sanskrit enthusiast exploring the meeting point of modern neuroscience and Indian knowledge systems.
          </p>
          <p>
            Through Ivy Pandit, he presents evidence-informed discussions on consciousness, cognition, meditation, epigenetics, neuroplasticity, Sanskrit literature, and Sanatana Dharma.
          </p>
          <a className="button" href="/about">Read Full Biography</a>
        </div>
        <div className="quote">
          “Science teaches us how to ask questions rigorously; the great traditions of human civilization remind us which questions are worth asking.”
        </div>
      </section>

      <section className="section">
        <div className="copy">
          <h2>Science & Shastra</h2>
          <p>
            Ivy Pandit develops a serious bridge between modern scientific inquiry and Indian knowledge systems—without overclaiming, without reducing shastra to laboratory data, and without ignoring the power of evidence.
          </p>
        </div>
        <div className="article-grid">
          <div className="article-card">
            <span className="badge">Featured</span>
            <h3>Garbhadhana & Epigenetics</h3>
            <p>How parental environment, stress, lifestyle, and intentional preparation may shape future generations.</p>
            <a href="/articles/garbhadhana-epigenetics">Read Article →</a>
          </div>
          <div className="article-card">
            <span className="badge">Featured</span>
            <h3>Gayatri & Neuroplasticity</h3>
            <p>Exploring mantra, attention, sound, memory, and contemplative practice through neuroscience.</p>
            <a href="/articles/gayatri-neuroplasticity">Read Article →</a>
          </div>
          <div className="article-card">
            <span className="badge">Featured</span>
            <h3>Gita & Cognitive Resilience</h3>
            <p>Decision-making, emotional regulation, dharma, and leadership under stress.</p>
            <a href="/articles/gita-cognitive-resilience">Read Article →</a>
          </div>
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