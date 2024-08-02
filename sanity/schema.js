import { blockContentType } from "./schemaTypes/blockContentType";
import { aboutType } from "./schemaTypes/about";
import { projectType } from "./schemaTypes/project";
import { settingsType } from "./schemaTypes/settings";
import { socialMediaType } from "./schemaTypes/socialMedia";

export const schema = {
  types: [
    blockContentType,
    aboutType,
    projectType,
    settingsType,
    socialMediaType,
  ],
};
