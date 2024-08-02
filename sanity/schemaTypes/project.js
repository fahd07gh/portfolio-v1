import { ImagesIcon } from "@sanity/icons";

const languages = [
  { value: "ar", title: "Arabic" },
  { value: "en", title: "English" },
];
export const projectType = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "language",
      type: "string",
      options: {
        list: languages,
      },
      // readOnly: true,
      // hidden: true,
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "body",
      type: "blockContent",
    },
    {
      name: "projectLinks",
      type: "object",
      fields: [
        {
          name: "code",
          type: "url",
        },
        {
          name: "demo",
          type: "url",
        },
      ],
    },
    {
      name: "otherLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              description: "Title of the link",
            },
            {
              name: "url",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "date",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
      media: "image",
    },
    prepare: ({ language, title, media }) => {
      const languageName =
        language &&
        languages.flatMap((option) =>
          option.value === language ? [option.title] : []
        );
      return {
        title: title,
        subtitle: language
          ? `${languageName}`
          : "No language set this will not be displayed",
        media: media || ImagesIcon,
      };
    },
  },
};
