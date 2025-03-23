import { useState } from "react";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/templates/MainLayout";

export default function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === "de" ? "en" : "de");

  return (
    <div className={darkMode ? "dark" : ""}>
      <MainLayout
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleLanguage={toggleLanguage}
      />
    </div>
  );
}
