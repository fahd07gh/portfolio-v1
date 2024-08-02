import { client } from "@/sanity/lib/client";
import { cookies } from "next/headers";

export async function getAbout() {
  const cookieStore = cookies();
  const hasLang = cookieStore.has("lang");
  let lang = "en";
  if (hasLang) {
    lang = cookieStore.get("lang").value;
  }
  return client.fetch(
    `*[_type == "about" && language == $lang][0]{
        header,
        language,
        skills,
        education,
      }`,
    { lang }
  );
}

export async function getProjects() {
  const cookieStore = cookies();
  const hasLang = cookieStore.has("lang");
  let lang = "en";
  if (hasLang) {
    lang = cookieStore.get("lang").value;
  }
  return client.fetch(
    `*[_type == "project"&& language == $lang] | order(date) [0...6]{
        language,        
        title,
        "slug": slug.current,
        description,
        "image": image.asset->{
        ...,
        metadata {lqip},
        },
        tags,
        body,
        }`,
    { lang }
  );
}

export async function getProject(slug) {
  const cookieStore = cookies();
  const hasLang = cookieStore.has("lang");
  let lang = "en";
  if (hasLang) {
    lang = cookieStore.get("lang").value;
  }
  return client.fetch(
    `*[_type == "project" && slug.current == $slug&& language == $lang][0]`,
    {
      slug,
      lang,
    }
  );
}
export async function getSocialMedia() {
  return client.fetch(`*[_type == "socialMedia"][0]{
    Links
    }`);
}
export async function getSetting() {
  const cookieStore = cookies();
  const hasLang = cookieStore.has("lang");
  let lang = "en";
  if (hasLang) {
    lang = cookieStore.get("lang").value;
  }
  return client.fetch(`*[_type == "settings" && language == $lang][0]`, {
    lang,
  });
}
export async function getTest(title) {
  return client.fetch(`*[_type == "sections" && title == $title ]`, {
    title,
  });
}

// {
//   title,
//   description,
//   "slug": slug.current,
//   "image": image.asset->{
//   ...,
//   metadata {lqip},
//   },
//   tags,
//   body,
//   content,
//   date,
//   }

// language,
// title,
// "slug": slug.current,
// description,
// "image": image.asset->{
// ...,
// metadata {lqip},
// },
// tags,
// body,
// date,
