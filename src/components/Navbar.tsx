"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100">
      <Link to="/" className="text-xl font-medium tracking-tight">
        Jordi Roca
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <Link
          to={`/${i18n.language}`}
          className="text-gray-600 hover:text-black transition-colors"
        >
          About
        </Link>
        <Link
          to={`/${i18n.language}/${t("routes.projects")}`}
          className="text-gray-600 hover:text-black transition-colors"
        >
          Projects
        </Link>

        <div className="flex items-center space-x-2 ml-4 border-l border-gray-200 pl-4">
          <button
            className={`px-2 py-1 text-sm ${
              i18n.language === "en"
                ? "font-medium text-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => changeLanguage("en")}
            aria-label="Switch to English"
          >
            ENG
          </button>
          <button
            className={`px-2 py-1 text-sm ${
              i18n.language === "es"
                ? "font-medium text-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => changeLanguage("es")}
            aria-label="Switch to Spanish"
          >
            SPA
          </button>
        </div>
      </div>

      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 border-b border-gray-100 shadow-sm">
          <div className="flex flex-col py-4 px-6">
            <Link
              to="/"
              className="py-2 text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to={`/${i18n.language}/${t("routes.projects")}`}
              className="py-2 text-gray-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>

            <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100">
              <button
                className={`px-2 py-1 text-sm ${
                  i18n.language === "en"
                    ? "font-medium text-black"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => changeLanguage("en")}
                aria-label="Switch to English"
              >
                ENG
              </button>
              <button
                className={`px-2 py-1 text-sm ${
                  i18n.language === "es"
                    ? "font-medium text-black"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => changeLanguage("es")}
                aria-label="Switch to Spanish"
              >
                SPA
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
