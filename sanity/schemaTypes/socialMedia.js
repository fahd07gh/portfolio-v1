import { EarthGlobeIcon } from "@sanity/icons";

export const socialMediaType = {
  name: "socialMedia",
  title: "Social Media",
  icon: EarthGlobeIcon,
  type: "document",
  fields: [
    {
      name: "Links",
      type: "array",
      icon: EarthGlobeIcon,
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
            },
            {
              name: "icon",
              type: "string",
            },
            {
              name: "url",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => {
      return {
        title: "Social Media",
        media: EarthGlobeIcon,
      };
    },
  },
};
