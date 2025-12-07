import { Moon, Sun } from "lucide-react"
import { cn } from "../lib/utils";
import { useTheme } from "./ThemeContext";

export const ThemeToggle = ({ inline = false }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                inline
                    ? "rounded-full transition-colors duration-300"
                    : "fixed top-4 right-4 max-sm:hidden z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden cursor-pointer"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-white" />
            ) : (
                <Moon className="h-6 w-6 text-black" />
            )}
        </button>
    );
};
