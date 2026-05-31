import { Hero, BannerStrip, AboutSection, TopicsSection, ResearchSection, VideosSection, ContactSection } from "../components/Site";

export default function Home() {
  return (
    <main>
      <Hero />
      <BannerStrip />
      <AboutSection />
      <TopicsSection />
      <ResearchSection />
      <VideosSection />
      <ContactSection />
    </main>
  );
}
