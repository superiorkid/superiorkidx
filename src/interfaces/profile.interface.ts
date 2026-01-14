import type { EntryFieldTypes } from "contentful";
import type { SkillSkeleton } from "./skill.interface";
import type { ExperienceSkeleton } from "./experience.interface";
import type { ProjectSkeleton } from "./project.interface";

export interface Availability {
  label: string;
  status: "available" | "unavailable";
  ctaLink: string;
  ctaText: string;
  cvUrl: string;
}

export interface ProfileSkeleton {
  contentTypeId: "profile";
  fields: {
    name: EntryFieldTypes.Text;
    email: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    avatar: EntryFieldTypes.Text;
    linkedinUrl: EntryFieldTypes.Text;
    summary: EntryFieldTypes.RichText;
    availability: EntryFieldTypes.Object;
    cv: EntryFieldTypes.Object;
    about: EntryFieldTypes.RichText;
    skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SkillSkeleton>>;
    experiences: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<ExperienceSkeleton>
    >;
    projects: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ProjectSkeleton>>;
    cvUrl: EntryFieldTypes.Text;
  };
}
