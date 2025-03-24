import { useTranslation } from "react-i18next";
import backgroundImage from "../../assets/example.png";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <div
            className="h-full w-full bg-cover bg-center bg-no-repeat text-black dark:text-white flex flex-col justify-center items-start px-8 md:px-24"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <h1 className="text-4xl font-bold mb-4 bg-white/70 dark:bg-gray-900/70 px-4 py-2 rounded">
                {t("hero.greeting")}
            </h1>
            <p className="text-2xl bg-white/70 dark:bg-gray-900/70 px-4 py-1 rounded">Tim Romonath</p>
            <p className="text-md bg-white/70 dark:bg-gray-900/70 px-4 py-1 rounded">B. Sc. Informatik</p>
        </div>
    );
}
