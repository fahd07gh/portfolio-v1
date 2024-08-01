import Card from "@/components/card";
import SectionTitle from "@/components/SectionTitle";
import { getProjects } from "@/sanity/lib/querys";
import React from "react";

export default async function Project({ lang }) {
  const projects = await getProjects();
  // console.log("projects", projects[0]);
  let title = lang === "en" ? "PROJECT" : "مشروع";
  return (
    <section>
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-2">
        {projects.map((project) => (
          <Card key={project.slug} {...project} lang={lang} />
        ))}
        {/* <Card key={projects[0].slug} {...projects[0]} /> */}
      </div>
    </section>
  );
}
