import Card from "@/components/card";
import SectionTitle from "@/components/SectionTitle";
import { getProjects } from "@/sanity/lib/querys";
import React from "react";

export default async function Project({ lang }) {
  let projects = await getProjects();
  let title = lang === "en" ? "PROJECT" : "مشروع";
  projects.reverse();
  return (
    <section className="mb-10">
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-2">
        {projects?.map((project, index) => {
          return (
            <>
              <Card key={project.slug + "-" + index} {...project} lang={lang} />
            </>
          );
        })}
      </div>
    </section>
  );
}
