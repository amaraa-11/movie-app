"use client";

import React from "react";
import SearchBar from "./SearchBar";
import { Film } from "lucide-react";
const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <nav className="bg-gray-800 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">
          <Film /> Movie Z
        </h1>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
