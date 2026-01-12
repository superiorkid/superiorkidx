import type { EntryFieldTypes } from "contentful";

export interface ExperienceSkeleton {
  contentTypeId: "experience";
  fields: {
    title: EntryFieldTypes.Text;
    company: EntryFieldTypes.Text;
    startDate: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Date;
    technologies: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    archievements: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    type: EntryFieldTypes.Text;
  };
}

export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  archievements: string[];
  // type: "full-time" | "contract" | "internship";
  type: string;
}
