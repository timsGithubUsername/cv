import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import SideNavigation from "../organisms/SideNavigation";
import DarkModeToggle from "../atoms/DarkModeToggle";
import LanguageSwitcher from "../atoms/LanguageSwitcher";
import HeroSection from "../organisms/HeroSection";
import AboutSection from "../organisms/AboutSection";

interface Props {
    darkMode: boolean;
    toggleDarkMode: () => void;
    toggleLanguage: () => void;
}

export default function MainLayout({
    darkMode,
    toggleDarkMode,
    toggleLanguage,
}: Props) {
    const { t } = useTranslation();

    return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
      {/* Fixed UI Elements */}
        <div className="fixed bottom-4 left-4 z-50 flex gap-2">
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <LanguageSwitcher toggleLanguage={toggleLanguage} />
        </div>

        <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50">
            <SideNavigation />
        </div>

        {/* Sections */}
        <section id="home" className="snap-start h-screen">
            <HeroSection />
        </section>

        <section id="about" className="snap-start h-screen">
            <AboutSection />
        </section>
    </div>
    );
}
