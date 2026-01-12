import type { EntryFieldTypes } from "contentful";

export interface SkillSkeleton {
  contentTypeId: "skills";
  fields: {
    label: EntryFieldTypes.Text;
    icon: EntryFieldTypes.Text;
    url: EntryFieldTypes.Text;
  };
}

export interface Skill {
  label: string;
  icon: string;
  url: string;
}
