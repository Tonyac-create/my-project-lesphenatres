import FriseSection from "../components/Philisophy/FriseSection";
import HeroSection from "../components/Philisophy/HeroSection";
import JoinsUsSection from "../components/Philisophy/JoinsUsSection";
import HistorySection from "../components/Philisophy/HistorySection";
import ValuesSection from "../components/Philisophy/ValuesSection";
import PhilosophySection from "../components/Philisophy/PhilisophySection";

export default function Troupe() {
    return (
        <>
            <HeroSection />
            <HistorySection />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <PhilosophySection />
                <ValuesSection />
            </div>
            <FriseSection />
            <JoinsUsSection />
        </>
    );
}