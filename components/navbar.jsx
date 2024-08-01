import Link from "next/link";
import React from "react";
import LanguageButton from "./languageButton";

export default function navbar({ lang }) {
  const navLinks = {
    en: ["Home", "About", "Project", "Contact"],
    ar: ["الرئيسية", "عني", "مشروع", "تواصل"],
  };

  return (
    <header className="flex items-center justify-center gap-6 fixed top-5 left-0 w-full">
      {/* gap-5  pe-5*/}
      <nev className="max-w-[400px] w-full h-10 bg-secondary flex items-center justify-between pe-3  rounded-full">
        <div className="w-full flex flex-nowrap justify-start items-center text-xl h-full">
          {navLinks[lang].map((link) => (
            <Link
              key={link}
              href={`
            ${link === "Home" ? "/" : `#${link.toLowerCase()}`}`}
              className="text-color border-e px-3 h-full flex items-center justify-center"
            >
              {link}
            </Link>
          ))}
        </div>
        <LanguageButton />
      </nev>
    </header>
  );
}
