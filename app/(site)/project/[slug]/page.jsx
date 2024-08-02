import CustomPortableText from "@/components/portable-text";
import { urlFor } from "@/sanity/lib/image";
import { getProject } from "@/sanity/lib/querys";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

export default async function page({ params }) {
  const project = await getProject(params.slug);
  // console.log("project", project);
  return (
    <article className="pb-10">
      <div className="relative mt-5 mb-14">
        {project.image && (
          <Image
            src={urlFor(project.image)
              .width(800)
              .height(450)
              .quality(100)
              .url()}
            placeholder="blur"
            blurDataURL={project.image?.metadata?.lqip || "./logo.svg"}
            alt={project.title}
            className="aspect-video w-full rounded-md border"
            width={800}
            height={450}
            priority={true}
          />
        )}
        <div className="bg-accent border rounded-lg px-5 py-2 w-[calc(100%-20px)] absolute translate-y-1/2 -translate-x-1/2 left-1/2 bottom-0 ">
          <h1 className="font-black text-4xl line-clamp-1">{project.title}</h1>
          <div className="flex justify-between items-center ps-2">
            {project.tags && (
              <div className="flex flex-row flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <span
                    key={tag + "-" + index}
                    className="after:content-[','] last:after:content-['']"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {project.date && (
              <time dateTime={project.date} className="font-extrabold">
                {format(new Date(project.date), "LLLL	d, yyyy")}
              </time>
            )}
          </div>
        </div>
      </div>
      {project.body && (
        <CustomPortableText value={project.body} className="text-xl px-3" />
      )}
      {project?.projectLinks && (
        <div className="bg-accent rounded-lg px-5 py-2 w-[calc(100%-20px)] h-20 mt-5 flex justify-center items-center gap-5 relative">
          <span className="absolute top-0 left-0 text-2xl font-extrabold uppercase -translate-y-1/2">
            Project Links
          </span>
          {project?.projectLinks?.code && (
            <Link
              href={project?.projectLinks?.code}
              className="bg-button hover:bg-secondary px-5 py-2 rounded-lg border"
            >
              Code
            </Link>
          )}
          {project?.projectLinks?.demo && (
            <Link
              href={project?.projectLinks?.demo}
              className="bg-button hover:bg-secondary px-5 py-2 rounded-lg border"
            >
              Demo
            </Link>
          )}
        </div>
      )}
      {project?.otherLinks && project?.otherLinks.length > 0 && (
        <div className="bg-accent rounded-lg px-5 py-2 w-[calc(100%-20px)]  mt-5 flex justify-start pt-5 items-center gap-5 relative">
          <span className="absolute top-0 left-0 text-2xl font-extrabold uppercase -translate-y-1/2">
            Other Links
          </span>
          <ul>
            {project?.otherLinks?.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
