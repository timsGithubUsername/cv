type Props = {
    title: string;
    image: string;
    text: string;
};

export default function InfoCard({ title, image, text }: Props) {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-800 border rounded-lg shadow p-6 w-full max-w-sm">
            <h3 className="font-bold text-xl mb-3">{title}</h3>
            <img src={image} alt="" className="w-full h-40 object-cover rounded mb-3" />
            <p className="text-sm whitespace-pre-line text-gray-700 dark:text-gray-300">
                {text}
            </p>
        </div>
    );
}