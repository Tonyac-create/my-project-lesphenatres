import HeroSection from "./components/Home/HeroSection";
import SectionAbout from "./components/Home/SectionAbout";
import SectionActivty from "./components/Home/SectionActivty";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionAbout />
      <SectionActivty />
    </main>
  );
}
