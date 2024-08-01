import { getSocialMedia } from "@/sanity/lib/querys";
import Link from "next/link";

export default async function SocialMedia() {
  const socialMedia = await getSocialMedia();
  return (
    <>
      {socialMedia.Links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="has-tooltip bg-secondary hover:bg-secondary/60 p-2 flex justify-center items-center rounded-md cursor-pointer"
        >
          <span className="tooltip rounded shadow-lg p-1 bg-accent text-color -mt-20 border after:border-r after:border-b after:content-[' '] after:bg-inherit after:w-2 after:h-2 after:block after:rotate-45 after:absolute after:-translate-x-1/2  after:left-1/2 ">
            {link.name}
          </span>
          <span dangerouslySetInnerHTML={{ __html: link.icon }}></span>
        </Link>
      ))}
    </>
  );
}
