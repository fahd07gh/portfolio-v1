import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import SectionTitle from "@/components/SectionTitle";
import SocialMedia from "@/components/SocialMedia";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Project from "@/sections/Project";
import Contact from "@/sections/Contact";
import { Suspense } from "react";
import { getTest } from "@/sanity/lib/querys";
import { cookies } from "next/headers";

import Navbar from "@/components/navbar";

export default async function pgae() {
  const cookieStore = cookies();

  const hasLang = cookieStore.has("lang");
  let lang = "en";
  if (hasLang) {
    lang = cookieStore.get("lang").value;
  }

  return (
    <>
      {/* <form action={create}>
        <button>sadasd</button>
      </form> */}

      <Navbar lang={lang} />

      <Home lang={lang} />
      <About lang={lang} />
      <Project lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
