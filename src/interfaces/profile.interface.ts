import type { EntryFieldTypes } from "contentful";
import type { SkillSkeleton } from "./skill.interface";

export interface Availability {
  label: string;
  status: "available" | "unavailable";
  ctaLink: string;
  ctaText: string;
}

export interface ProfileSkeleton {
  contentTypeId: "profile";
  fields: {
    name: EntryFieldTypes.Text;
    email: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    avatar: EntryFieldTypes.Text;
    summary: EntryFieldTypes.RichText;
    availability: EntryFieldTypes.Object;
    cv: EntryFieldTypes.Object;
    about: EntryFieldTypes.RichText;
    skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SkillSkeleton>>;
  };
}
