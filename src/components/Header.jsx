import React, { useState } from "react";
import {
  CloseIcon,
  DropdownIcon,
  IMDbPro,
  MenuIcon,
  SearchIcon,
  WatchListIcon,
} from "./icons";
import {
  headerAwardsLinks,
  headerMoviesLinks,
  headerShowsLinks,
  headerWatchLinks,
} from "../utils/constant";
import { Link } from "react-router-dom";

export default function Header() {
  const [navExpanded, setNavExpanded] = useState(false);
  const NavMenuPc = () => {
    return (
      <div
        className={`absolute inset-0 min-h-screen w-full ${
          !navExpanded ? "-translate-y-full" : "translate-y-0"
        } transition ease-in-out duration-300 bg-secondary-300 py-8 overflow-auto z-30`}
      >
        <div className="max-w-[1024px] mx-auto px-4">
          <div className="flex justify-between">
            <div className="w-24">
              <img
                className="w-full h-auto"
                src="/logo.svg"
                alt=""
                width={64}
                height={32}
              />
            </div>
            <button
              onClick={() => setNavExpanded(false)}
              className="bg-yellow rounded-full w-12 h-12 flex items-center justify-center"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="grid grid-cols-3 py-12">
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <svg
                  className="text-yellow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
                </svg>
                <h3 className="text-2xl font-medium">Movies</h3>
              </div>
              <ul className="space-y-3 pl-8">
                {headerMoviesLinks.map((item, index) => (
                  <li key={index}>
                    <a className="hover:underline" href={item.link}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-7">
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="text-yellow"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path>
                  </svg>
                  <h3 className="text-2xl font-medium">TV Shows</h3>
                </div>
                <ul className="space-y-3 pl-8">
                  {headerShowsLinks.map((item, index) => (
                    <li key={index}>
                      <a className="hover:underline" href={item.link}>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="text-yellow"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"></path>
                  </svg>
                  <h3 className="text-2xl font-medium">Watch</h3>
                </div>
                <ul className="space-y-3 pl-8">
                  {headerWatchLinks.map((item, index) => (
                    <li key={index}>
                      <a className="hover:underline" href={item.link}>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="text-yellow"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94a.502.502 0 0 1-.75-.54l.85-3.66-2.83-2.45a.505.505 0 0 1 .29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32a.5.5 0 0 1 .28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z"></path>
                </svg>
                <h3 className="text-2xl font-medium">Awards & Events</h3>
              </div>
              <ul className="space-y-3 pl-8">
                {headerAwardsLinks.map((item, index) => (
                  <li key={index}>
                    <a className="hover:underline" href={item.link}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <header className="py-3 bg-secondary-250">
      <nav className="container">
        <div className="flex gap-2 text-sm font-medium">
          <Link to="/" className="block w-16 h-8 flex-shrink-0">
            <img
              className="w-full h-auto"
              src="/logo.svg"
              alt=""
              width={64}
              height={32}
            />
          </Link>
          <button
            className="hidden items-center gap-1 px-3 rounded cursor-pointer hover:bg-primary/20 lg:flex"
            onClick={() => setNavExpanded(!navExpanded)}
          >
            <MenuIcon />
            <span>Menu</span>
          </button>
          <div className="flex w-full relative">
            {/* ${headerDropdownHtml} */}
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
          <button className="hidden items-center px-3 rounded cursor-pointer hover:bg-primary/20 lg:flex">
            <IMDbPro />
          </button>
          <div className="border-l-2 border-primary/25 hidden lg:block"></div>
          <button className="hidden items-center gap-1 px-3 rounded cursor-pointer hover:bg-primary/20 sm:flex">
            <WatchListIcon />
            <span>Watchlist</span>
          </button>
          <button className="hidden items-center px-3 rounded cursor-pointer hover:bg-primary/20 flex-shrink-0 sm:flex">
            Sign In
          </button>
          <button className="hidden items-center px-3 rounded cursor-pointer hover:bg-primary/20 lg:flex">
            EN
          </button>
        </div>
      </nav>
      {/* navMenuPc  */}
      {NavMenuPc()}
    </header>
  );
}
