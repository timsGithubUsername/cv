import { useTranslation } from "react-i18next";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <div className="h-full w-full bg-blue-100 dark:bg-blue-950 text-black dark:text-white flex flex-col justify-center items-start px-24">
            <h1 className="text-4xl font-bold mb-4">{t("hero.greeting")}</h1>
            <p className="text-2xl">Tim Romonath</p>
            <p className="text-md">B. Sc. Informatik</p>
        </div>
    );
}
