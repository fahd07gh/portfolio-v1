import Home from "@/sections/Home";
import About from "@/sections/About";
import Project from "@/sections/Project";
import Contact from "@/sections/Contact";
import { cookies } from "next/headers";

import Navbar from "@/components/Navbar";

export default async function pgae() {
  const cookieStore = cookies();

  const hasLang = cookieStore.has("lang");
  let lang = "en";
  if (hasLang) {
    lang = cookieStore.get("lang").value;
  }

  return (
    <>
      <Navbar lang={lang} />

      <Home lang={lang} />
      <About lang={lang} />
      <Project lang={lang} />
      {/* <Contact lang={lang} /> */}
    </>
  );
}
