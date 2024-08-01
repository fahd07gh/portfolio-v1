/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default function CustomPortableText({ className, value }) {
  const components = {
    block: {
      normal: ({ children }) => {
        if (children.length === 1 && children[0] === "") {
          return <br />;
        }
        return <p>{children}</p>;
      },
      h2: ({ children }) => (
        <h5 className="mb-2 text-7xl font-bold">{children}</h5>
      ),
      h3: ({ children }) => (
        <h5 className="mb-2 text-xl font-bold">{children}</h5>
      ),
      blockquote: ({ children }) => (
        <blockquote className="bg-accent  p-3 rounded-lg text-xl ">
          {children}
        </blockquote>
      ),
    },

    list: {
      bullet: ({ children }) => (
        <ul className="mt-xl list-inside list-disc">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="mt-lg list-inside list-decimal">{children}</ol>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            href={value?.href}
            className="text-sky-400 after:content-['_↗']"
            target="_target"
          >
            {children}
          </a>
        );
      },
    },

    types: {
      image: ({ value }) => (
        <Image
          src={urlFor(value).width(800).quality(100).url()}
          alt="image"
          className="aspect-video w-full rounded-md  border-secondary border-8"
          width={800}
          height={450}
        />
      ),
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
