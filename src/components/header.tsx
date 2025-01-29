import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/logo.png" : "/logo2.png"}
            alt="Klimate Logo"
            className="h-14"
          />
        </Link>

        <div>
          {/* Search */}
          {/* Theme toggle */}
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex cursor-pointer items-center transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
