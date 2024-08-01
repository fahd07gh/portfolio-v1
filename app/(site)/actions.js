"use server";

import { cookies } from "next/headers";

export async function setLanguage() {
  const cookieStore = cookies();
  const hasLang = cookieStore.has("lang");
  if (!hasLang) {
    cookieStore.set("lang", "en");
  }
  let lang = cookieStore.get("lang").value;
  cookies().set("lang", lang === "en" ? "ar" : "en");
}
