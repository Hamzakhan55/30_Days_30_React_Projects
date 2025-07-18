import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("dark-light", theme);
    localStorage.setItem("theme", theme);
    console.log(theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        theme === "light"
          ? "bg-gradient-to-tr from-blue-100 to-white"
          : "bg-gradient-to-tr from-gray-800 to-black"
      }`}
    >
      <div className={`backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-white/20 rounded-2xl shadow-2xl p-10 text-center transition-all duration-500`}>
        <h1
          className={`text-5xl font-extrabold mb-8 tracking-tight ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Persistent Theme
        </h1>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
