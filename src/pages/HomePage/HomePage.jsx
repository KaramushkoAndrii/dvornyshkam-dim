
import HeroSection from "../../components/heroSection/HeroSection";
import SearchSection from "../../components/searchSection/SearchSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import OurAnimals from "../../components/ourAnimals/OurAnimals";
import HelpSection from "../../components/helpSection/HelpSection";





const HomePage = ({isOpen}) => {
    return (
        <>
            <HeroSection />
            <SearchSection isOpen={isOpen}/>
            <AboutSection />
            <OurAnimals isOpen={isOpen}/>
            <HelpSection />
        </>
    )
}

export default HomePage