"use client";

import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigationLinks = [
    { title: t("navigation.about"), href: "" },
    { title: t("navigation.projects"), href: t("routes.projects") },
    { title: t("navigation.volunteering"), href: t("routes.volunteering") },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  const closeSheet = () => setIsOpen(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Go to homepage"
          >
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                JR
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <nav
            className="flex items-center space-x-6"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationLinks.map((link) => (
              <Link
                to={`/${i18n.language}/${link.href}`}
                key={link.title}
                className="text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2 group"
                aria-label={`Current language: ${i18n.language}. Click to change language`}
              >
                <Globe className="h-4 w-4" />
                <span>{i18n.language.toUpperCase()}</span>
                <ChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  )}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={cn(
                    "flex items-center space-x-2 cursor-pointer",
                    i18n.language === language.code && "bg-accent"
                  )}
                >
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                  {i18n.language === language.code && (
                    <span className="ml-auto text-xs text-muted-foreground">
                      ✓
                    </span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="relative"
              >
                <Menu
                  className={cn(
                    "h-6 w-6 transition-all",
                    isOpen && "rotate-90 scale-0"
                  )}
                />
                <X
                  className={cn(
                    "absolute h-6 w-6 transition-all",
                    !isOpen && "rotate-90 scale-0"
                  )}
                />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-full sm:w-[350px]"
              id="mobile-menu"
            >
              <SheetHeader className="text-left">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-6 mt-8">
                <nav
                  className="flex flex-col space-y-1"
                  role="navigation"
                  aria-label="Mobile navigation"
                >
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.title}
                      to={`/${i18n.language}/${t(link.href)}`}
                      onClick={closeSheet}
                      className="flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
                <div className="border-t pt-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Language
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((language) => (
                      <Button
                        key={language.code}
                        variant={
                          i18n.language === language.code
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => {
                          changeLanguage(language.code);
                          closeSheet();
                        }}
                        className="flex items-center space-x-2 justify-start"
                      >
                        <span>{language.flag}</span>
                        <span className="text-xs">{language.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
