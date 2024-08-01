import { UserIcon } from "@sanity/icons";
const languages = [
  { value: "ar", title: "Arabic" },
  { value: "en", title: "English" },
];
export const aboutType = {
  name: "about",
  title: "About",
  icon: UserIcon,
  type: "document",
  fields: [
    {
      name: "language",
      type: "string",
      options: {
        list: languages,
      },
    },
    {
      name: "header",
      type: "text",
    },
    {
      name: "skills",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "education",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      language: "language",
    },
    prepare: ({ language }) => {
      const languageName =
        language &&
        languages.flatMap((option) =>
          option.value === language ? [option.title] : []
        );
      return {
        title: "About - " + language,
        subtitle: language ? `${languageName}` : "No language set",
        media: UserIcon,
      };
    },
  },
};
