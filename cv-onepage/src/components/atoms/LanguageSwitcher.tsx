import { useTranslation } from "react-i18next";

type Props = {
    toggleLanguage: () => void;
};

export default function LanguageSwitcher({ toggleLanguage }: Props) {
    const { i18n } = useTranslation();

    return (
        <button
            onClick={toggleLanguage}
            className="w-10 h-10 border rounded flex items-center justify-center text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Switch language"
        >
            {i18n.language.toUpperCase()}
        </button>
    );
}
