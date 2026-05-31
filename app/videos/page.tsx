import { VideosSection, BannerStrip, ContactSection } from "../../components/Site";

export const metadata = { title: "Videos | Ivy Pandit" };

export default function VideosPage() {
  return <main className="pageTop"><BannerStrip /><VideosSection /><ContactSection /></main>;
}
