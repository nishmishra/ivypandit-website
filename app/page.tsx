import Link from 'next/link';

export default function Home() {
  return <>
    <section className="hero">
      <h2>Dr. Nishant K. Mishra, MD, PhD</h2>
      <p>Neurologist • Scientist • Thinker • Sanskrit Enthusiast</p>
      <p>Exploring neuroscience, consciousness, cognition, Sanskrit literature, and Sanatana Dharma through evidence-informed, hypothesis-generating inquiry.</p>
      <div className="btns"><a className="btn" href="https://www.youtube.com/@IvyPandit">Subscribe on YouTube</a><Link className="btn secondary" href="/articles">Explore Articles</Link></div>
    </section>
    <main>
      <section className="section">
        <h2>Featured Topics</h2>
        <div className="grid">
          {[
            ['Gayatri & Neuroplasticity','How mantra, meaning, sound, attention, and repetition may shape cognition.'],
            ['Garbhadhana & Epigenetics','Ancient preparation and modern biology of parental environment.'],
            ['Bhagavad Gita & Resilience','Stress, clarity, duty, and cognitive resilience under uncertainty.'],
            ['Mahabharata & Leadership','Leadership, conflict, ethics, and decision-making in complex situations.'],
            ['Sanskrit & Cognition','Language, memory, sound, precision, and contemplative learning.'],
            ['Many More','Vedas, Upanishads, Puranas, meditation, ethics, consciousness, and human flourishing.']
          ].map(([t,d])=><div className="card" key={t}><h3>{t}</h3><p>{d}</p><Link href="/articles">Learn More →</Link></div>)}
        </div>
      </section>

      <section className="section notice">
        <h2>Research Philosophy</h2>
        <p>Ivy Pandit seeks to explore Sanātana knowledge traditions through the lens of modern scholarship, neuroscience, medicine, psychology, linguistics, and history. The objective is neither blind acceptance nor dismissal, but rigorous inquiry. Many ideas presented on this website are hypothesis-generating and intended to inspire further scientific investigation.</p>
        <Link href="/research">Read the full research philosophy →</Link>
      </section>

      <section className="section">
        <h2>Featured Article</h2>
        <div className="card">
          <h3>Gayatri Mantra, Sandhyā-Vandana, Cognitive Function, and Mental Health</h3>
          <p>A scientific perspective on ancient contemplative practice, neuroplasticity, attention, emotional regulation, and psychiatric well-being.</p>
          <Link href="/articles/gayatri-mantra-cognitive-function">Read Article →</Link>
        </div>
      </section>
    </main>
  </>;
}
