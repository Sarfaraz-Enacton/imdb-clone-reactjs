import React, { useState } from "react";
import { DropdownIcon, SearchIcon } from "./icons";
import FetchApi from "./FetchApi";
import { config } from "../config";
import SearchCard from "./cards/SearchCard";

export default function HeaderSearch() {
  const [searchInput, setSearchInput] = useState("");
  const {
    data: searchData,
    loading,
    error,
  } = FetchApi(
    `${config.API_BASE_URL}/search/multi?query=${searchInput}&page=1`
  );

  return (
    <div className="relative w-full">
      <div className="flex w-full h-full">
        <div className="dropdown relative inline-block text-left">
          <button className="bg-primary text-secondary px-3 rounded-l border-r border-secondary inline-flex items-center justify-center h-full">
            <span data-value="multi">All</span>
            <DropdownIcon />
          </button>
          <div
            className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-secondary-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 transition-opacity"
            role="menu"
          >
            <div className="py-1 text-primary" role="none">
              <div
                className="block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                data-value="multi"
              >
                All
              </div>
              <div
                className="block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                data-value="tv"
              >
                Shows
              </div>
              <div
                className="block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                data-value="movie"
              >
                Movies
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <input
            className="w-full h-full outline-none bg-primary px-3 caret-secondary text-secondary"
            type="text"
            placeholder="Search IMDb"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button className="bg-primary text-secondary px-2 rounded-r">
          <SearchIcon />
        </button>
        <div className="absolute right-0 left-0 top-8 mt-2 origin-top-right z-10 bg-secondary-300 py-2 rounded w-full divide-y-[1px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-1 transition-opacity hidden">
          <div className="w-full h-[300px] flex items-center justify-center gap-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-yellow"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-yellow"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-yellow"></div>
          </div>
        </div>
      </div>
      {searchInput.length > 2 && searchData && (
        <div className="absolute right-0 left-0 top-8 mt-2 origin-top-right z-10 bg-secondary-300 py-2 rounded w-full divide-y-[1px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-1 transition-opacity">
          {searchData.slice(0, 7).map((item, i) => (
            <SearchCard data={item} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}
