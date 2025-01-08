"use client";
import { useState, useEffect } from "react";
import React from "react";
import SearchBar from "./SearchBar";
import { Film } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-gray-800 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">
          <Film /> Movie Z
        </h1>
        <SearchBar onSearch={onSearch} />
        <button
          onClick={toggleTheme}
          className="p-4 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-400"
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
