"use client";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import LanguageButton from "./languageButton";
import { ThemsToggle } from "./ThemsToggle";

export default function navbar({ lang }) {
  const navLinks = {
    en: ["Home", "About", "Project", "Contact"],
    ar: ["الرئيسية", "عني", "مشروع", "تواصل"],
  };
  const [y, setY] = useState(0);
  const [show, setShow] = useState(true);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        // console.log("scrolling up");
        setShow(true);
      } else if (y < window.scrollY) {
        // console.log("scrolling down");
        setShow(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <header className="flex items-center justify-center gap-6 fixed top-5 left-0 w-full z-50">
      <nav className="max-w-[400px] w-fitt h-10 bg-secondary border flex items-center justify-between gap-3 px-3 rounded-full delay-150 duration-100">
        <div
          className={`w-full flex flex-nowrap justify-start items-center text-xl h-full ${!show ? "hidden" : ""}`}
        >
          {navLinks[lang]?.map((link, index) => (
            <Link
              key={link + "-" + index}
              href={`
            ${link === "Home" ? "/" : `#${link.toLowerCase()}`}`}
              className="text-color border-e px-2 h-full flex items-center justify-center first:pl-0 "
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <LanguageButton />
          <ThemsToggle />
        </div>
      </nav>
    </header>
  );
}
