import Image from "next/image";

const topics = [
  ["🧬", "Epigenetics & Garbhadhana Samskara", "Ancient insights and modern molecular science exploring the biology of future generations."],
  ["🧠", "Meditation & Neuroplasticity", "How contemplative practices shape attention, cognition, and emotional resilience."],
  ["📜", "Sanskrit & Cognition", "Language, mantra, memory, rhythm, and the neuroscience of sacred sound."],
  ["☀️", "Bhagavad Gita & Psychology", "Ancient frameworks for attention, ethics, stress, resilience, and conscious living."],
];

const series = [
  "Bhagavad Gita & Neuroscience",
  "Mahabharata & Psychology",
  "Consciousness & Vedanta",
  "Sanskrit & Cognition",
  "Meditation & Neuroplasticity",
  "Epigenetics & Garbhadhana Samskara",
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">Ivy Pandit</div>
        <div className="links">
          <a href="#about">About</a>
          <a href="#topics">Topics</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="pill">ॐ Neuroscience • Sanskrit • Consciousness</div>
          <h1>Ivy Pandit</h1>
          <h2>Neuroscience & Sanatana Dharma</h2>
          <p>
            Exploring consciousness, epigenetics, meditation, Sanskrit wisdom,
            and cognitive science through evidence-based inquiry and timeless philosophical insight.
          </p>
          <div className="signature">
            <strong>Nishant K Mishra, MD PhD</strong>
            <span>Physician • Researcher • Sanskrit Enthusiast</span>
            <em>Bridging Modern Science and Ancient Wisdom</em>
          </div>
          <div className="buttons">
            <a className="primary" href="#videos">Watch Videos</a>
            <a className="secondary" href="#research">Explore Research</a>
          </div>
        </div>

        <div className="heroCard">
          <Image src="/images/dr-nishant-mishra.jpeg" alt="Dr Nishant Mishra" width={700} height={900} priority />
          <div className="bannerFloat">
            <Image src="/images/ivy-pandit-banner.png" alt="Ivy Pandit YouTube banner" width={500} height={200} />
          </div>
          <div className="lectureBox">
            <small>Featured Lecture</small>
            <h3>गर्भाधान संस्कार और Epigenetics</h3>
            <p>Future generations through the lens of neuroscience and Sanatana wisdom.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="aboutImage">
          <Image src="/images/dr-nishant-mishra.jpeg" alt="Dr Nishant Mishra" width={700} height={900} />
        </div>
        <div>
          <small className="eyebrow">About</small>
          <h2>About Dr. Nishant Mishra</h2>
          <p>
            Dr. Nishant K Mishra is a physician-scientist, neurologist, educator,
            and Sanskrit enthusiast dedicated to exploring the relationship between modern neuroscience
            and the philosophical traditions of Sanatana Dharma.
          </p>
          <p>
            Through Ivy Pandit, he presents evidence-informed discussions on consciousness,
            meditation, cognition, epigenetics, neuroplasticity, Sanskrit literature,
            and the scientific interpretation of ancient contemplative practices.
          </p>
          <div className="miniGrid">
            <div><b>🧠 Neuroscience</b><span>Cognition, attention, neuroplasticity, meditation, and consciousness.</span></div>
            <div><b>📜 Sanskrit & Dharma</b><span>Vedic literature, mantra, philosophy, and contemplative traditions.</span></div>
          </div>
        </div>
      </section>

      <section id="topics" className="section center">
        <small className="eyebrow">Core Themes</small>
        <h2>Science Meets Sacred Knowledge</h2>
        <p className="lead">A modern intellectual platform for neuroscience, Sanskrit literature, meditation, epigenetics, cognition, and consciousness.</p>
        <div className="topicGrid">
          {topics.map(([icon, title, desc]) => (
            <div className="topic" key={title}>
              <span>{icon}</span><h3>{title}</h3><p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="section research">
        <small className="eyebrow">Evidence & Inquiry</small>
        <h2>Scientific Value of Indian Knowledge Systems</h2>
        <p>
          Ivy Pandit asks how insights from the Vedas, Upanishads, Mahabharata, Puranas,
          Yoga traditions, and other shastras can be meaningfully explored with modern scientific methods.
        </p>
        <div className="seriesGrid">
          {series.map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <section id="videos" className="section center darkBox">
        <small className="eyebrow">Featured Content</small>
        <h2>Latest Lectures & Videos</h2>
        <p className="lead">Add your YouTube channel link here after launch. This section can embed playlists and flagship lectures.</p>
        <a className="primary" href="https://www.youtube.com" target="_blank">Visit YouTube Channel</a>
      </section>

      <section id="contact" className="section center contact">
        <small className="eyebrow">Join The Community</small>
        <h2>The Ivy Pandit Letter</h2>
        <p className="lead">Monthly neuroscience insights, Sanskrit reflections, new lectures, and research updates.</p>
        <form className="emailForm">
          <input placeholder="Enter your email" type="email" />
          <button type="button">Join Now</button>
        </form>
      </section>

      <footer>
        <b>Ivy Pandit</b>
        <span>Neuroscience • Consciousness • Sanatana Dharma</span>
      </footer>
    </main>
  );
}
