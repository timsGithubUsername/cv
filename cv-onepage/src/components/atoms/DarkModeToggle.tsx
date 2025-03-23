type Props = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export default function DarkModeToggle({ darkMode, toggleDarkMode }: Props) {
    return (
        <button
            onClick={toggleDarkMode}
            className="w-10 h-10 border rounded flex items-center justify-center text-xl hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
        >
            {darkMode ? "🌙" : "☀️"}
        </button>
    );
}
