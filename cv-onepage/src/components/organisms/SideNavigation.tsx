import { useTranslation } from "react-i18next";

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

    return (
        <nav className="flex flex-col gap-2">
            {sections.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className="px-4 py-2 rounded border hover:bg-gray-200 dark:hover:bg-gray-700 text-sm text-center"
                >
                    {label}
                </a>
            ))}
        </nav>
    );
}
