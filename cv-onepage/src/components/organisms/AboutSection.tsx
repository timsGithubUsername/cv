import { useTranslation } from "react-i18next";
import InfoCard from "../molecules/InfoCard";
import backgroundImage from "../../assets/about_background.webp";
import card1Img from "../../assets/about_curiosity.webp";
import card2Img from "../../assets/about_patience.webp";
import card3Img from "../../assets/about_clarity_complexity.webp";

export default function AboutSection() {
    const { t } = useTranslation();

    const cards = [
        { title: t("about.card1.title"), text: t("about.card1.text"), image: card1Img },
        { title: t("about.card2.title"), text: t("about.card2.text"), image: card2Img  },
        { title: t("about.card3.title"), text: t("about.card3.text"), image: card3Img  },
    ];

    return (
        <div
            className="h-full w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center px-8 md:px-24 py-12 text-black dark:text-white"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="flex flex-row gap-8 justify-between w-full max-w-screen-xl mx-auto">
                <div className="mt-0">
                    <InfoCard title={cards[0].title} image={cards[0].image} text={cards[0].text} />
                </div>
                <div className="mt-12">
                    <InfoCard title={cards[1].title} image={cards[1].image} text={cards[1].text} />
                </div>
                <div className="mt-24">
                    <InfoCard title={cards[2].title} image={cards[2].image} text={cards[2].text} />
                </div>
            </div>
        </div>
    );
}