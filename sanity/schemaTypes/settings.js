import { CogIcon } from "@sanity/icons";
const languages = [
  { value: "ar", title: "Arabic" },
  { value: "en", title: "English" },
];
export const settingsType = {
  name: "settings",
  title: "Settings",
  icon: CogIcon,
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
    {
      name: "description",
      type: "text",
    },
  ],
  //   preview: {
  //     select: {
  //       language: "language",
  //     },
  //     prepare: ({ language }) => {
  //       const languageName =
  //         language &&
  //         languages.flatMap((option) =>
  //           option.value === language ? [option.title] : []
  //         );
  //       return {
  //         title: "About - " + language,
  //         subtitle: language ? `${languageName}` : "No language set",
  //         media: UserIcon,
  //       };
  //     },
  //   },
};
