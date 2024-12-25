"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";



const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <nav className="bg-gray-800 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">Movie Z</h1>
        <SearchBar onSearch={onSearch} />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
