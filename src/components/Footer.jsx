import React from "react";
import { footerLinks } from "../utils/constant";
import { Facebook, Instagram, TikTok, Twitter, Youtube } from "./icons";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="flex items-center justify-center flex-wrap gap-4 py-4">
          <a
            href="#"
            className="block p-3 rounded-full transition ease-in-out duration-300 hover:bg-secondary-100"
          >
            <TikTok />
          </a>

          <a
            href="#"
            className="block p-3 rounded-full transition ease-in-out duration-300 hover:bg-secondary-100"
          >
            <Instagram />
          </a>

          <a
            href="#"
            className="block p-3 rounded-full transition ease-in-out duration-300 hover:bg-secondary-100"
          >
            <Twitter />
          </a>

          <a
            href="#"
            className="block p-3 rounded-full transition ease-in-out duration-300 hover:bg-secondary-100"
          >
            <Youtube />
          </a>

          <a
            href="#"
            className="block p-3 rounded-full transition ease-in-out duration-300 hover:bg-secondary-100"
          >
            <Facebook />
          </a>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-3 px-4 sm:gap-5 max-w-[940px] mx-auto">
          {footerLinks.map((item, index) => (
            <a
              className="flex items-center gap-1 text-sm sm:text-base hover:underline px-2"
              href={item.link}
              target="_blank"
              key={index}
            >
              {item.text}
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path>
              </svg>
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center py-6">
          <img
            className="max-h-[18px]"
            src="/amazon-logo.svg"
            alt=""
            height={18}
            width={160}
          />
        </div>
        <div className="py-1.5 text-center">
          <p className="text-xs text-primary/70 tracking-wide">
            © 1990-{new Date().getFullYear()} by IMDb.com, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
