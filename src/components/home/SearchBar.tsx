"use client";

import { Icons } from "@/lib/config/images-config";

const SearchBar = () => {
  return (
    <div className="flex gap-2 items-center p-4 h-12 py-0 w-full bg-lightgray hover:bg-darkgray rounded-xl">
      <img src={Icons.SearchIcon} alt="search" className="w-4" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent w-full border-none outline-none"
      />
    </div>
  );
};

export default SearchBar;
