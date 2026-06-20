import Link from 'next/link';

export default function Home() {
  return <>
    <section className="banner-hero">
      <img src="/images/ivypandit-channel-banner3.png" alt="Ivy Pandit banner with neuroscience, Sanskrit, and Indian Knowledge Systems" />
    </section>

    <section className="hero">
      <h2>Ancient Wisdom. Modern Neuroscience.</h2>
      <p><strong>Dr. Nishant K. Mishra, MD, PhD</strong><br/>Stroke Neurologist • Neuroscientist • Sanskrit Enthusiast</p>
      <p>Exploring the intersection of neuroscience, cognition, Sanskrit literature, Indian Knowledge Systems, learning, memory, ethics, and human flourishing through evidence-informed, hypothesis-generating inquiry.</p>
      <div className="btns">
        <a className="btn" href="https://www.youtube.com/playlist?list=PLwQYDVEShtUqlbNhL2Rc53GbmzziVtgwN">Watch Lecture Playlist</a>
        <Link className="btn secondary" href="/articles">Read Articles</Link>
        <Link className="btn secondary" href="/speaking">Invite Me To Speak</Link>
      </div>
    </section>

    <main>
      <section className="section notice">
        <h2>Read this page in Hindi or Sanskrit</h2>
        <p>This homepage is also available as separate Hindi and Sanskrit webpages.</p>
        <div className="btns">
          <Link className="btn" href="/hi">हिन्दी पृष्ठ</Link>
          <Link className="btn secondary" href="/sa">संस्कृतम् पृष्ठम्</Link>
        </div>
      </section>

      <section className="section">
        <h2>IvyPandit Lecture Series</h2>
        <p>A growing collection of talks on Sanskrit texts, Indian Knowledge Systems, neuroscience, brain health, cognition, meditation, memory, and modern scientific thought.</p>
        <div className="video-frame">
          <iframe src="https://www.youtube.com/embed/videoseries?list=PLwQYDVEShtUqlbNhL2Rc53GbmzziVtgwN" title="IvyPandit Shastra and Neuroscience Playlist" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </section>

      <section className="section">
        <h2>Featured Topics</h2>
        <div className="grid">
          {[
            ['Gayatri & Neuroplasticity','How mantra, meaning, sound, attention, and repetition may shape cognition.'],
            ['Gurukula, Attention & Memory','Why focused learning, nature, discipline, and repetition may support brain health.'],
            ['Bhagavad Gita & Resilience','Stress, clarity, duty, and cognitive resilience under uncertainty.'],
            ['Mahabharata & Leadership','Leadership, conflict, ethics, and decision-making in complex situations.'],
            ['Sanskrit & Cognition','Language, memory, sound, precision, and contemplative learning.'],
            ['Shastra Study','A student’s notes on the Vedas, Upanishads, Itihasa, Puranas, and modern life.']
          ].map(([t,d])=><div className="card" key={t}><h3>{t}</h3><p>{d}</p><Link href="/articles">Learn More →</Link></div>)}
        </div>
      </section>

      <section className="section notice">
        <h2>My Journey Through the Shastras</h2>
        <p>I am not a traditional Acharya or Guru. I am a neurologist, scientist, and lifelong student of Sanskrit texts. IvyPandit documents my continuing effort to read, reflect, learn, and ask careful scientific questions inspired by the Indian knowledge tradition.</p>
        <Link href="/topics">Explore Shastra Study →</Link>
      </section>

      <section className="section">
        <h2>Scientific Background</h2>
        <div className="card">
          <p>Dr. Mishra is an MD, PhD stroke neurologist and physician-scientist with peer-reviewed publications in neurology, cerebrovascular disease, epilepsy, outcomes research, and brain health.</p>
          <p><a href="https://scholar.google.com/citations?user=1n2JUc8AAAAJ&hl=en">Google Scholar Profile →</a></p>
        </div>
      </section>
    </main>
  </>;
}
