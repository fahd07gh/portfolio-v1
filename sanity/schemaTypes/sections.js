import { BlockElementIcon } from "@sanity/icons";
const languages = [
  { value: "ar", title: "Arabic" },
  { value: "en", title: "English" },
];
export const TypeSections = {
  name: "sections",
  title: "Sections",
  icon: BlockElementIcon,
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
      name: "title",
      type: "string",
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
        title: "section - " + language,
        subtitle: language ? `${languageName}` : "No language set",
        media: BlockElementIcon,
      };
    },
  },
};
