import HeroSection from "./components/Home/HeroSection";
import News from "./components/Home/News";
import SectionAbout from "./components/Home/SectionAbout";
import SectionActivty from "./components/Home/SectionActivty";
import SectionTeam from "./components/Home/SectionTeam";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionAbout />
      <News />
      <SectionActivty />
      <SectionTeam />
    </main>
  );
}
