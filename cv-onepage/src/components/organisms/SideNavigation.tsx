import { useTranslation } from "react-i18next";
import useActiveSection from "../../hooks/useActiveSection";
import clsx from "clsx";


export default function SideNavigation() {
    const { t } = useTranslation();

    const sections = [
        { id: "home", label: t("nav.home") },
        { id: "about", label: t("nav.about") },
        { id: "skills", label: t("nav.skills") },
        { id: "experience", label: t("nav.experience") },
        { id: "education", label: t("nav.education") },
        { id: "projects", label: t("nav.projects") },
        { id: "contact", label: t("nav.contact") },
    ];

    const activeSection = useActiveSection(sections.map((s) => s.id));
    
    return (
        <nav className="flex flex-col gap-2">
            {sections.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={clsx(
                        "px-4 py-2 rounded border text-sm text-center transition",
                        activeSection === id
                            ? "bg-gray-800 text-white dark:bg-white dark:text-black font-bold"
                            : "hover:bg-gray-200 dark:hover:bg-gray-700"
                    )}
                >
                    {label}
                </a>
            ))}
        </nav>
    );
}
