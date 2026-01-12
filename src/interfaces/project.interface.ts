import type { EntryFieldTypes } from "contentful";

export interface ProjectSkeleton {
  contentTypeId: "project";
  fields: {
    title: EntryFieldTypes.Text;
    startDate: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Date;
    description: EntryFieldTypes.RichText;
    images: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    technologies: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    liveUrl: EntryFieldTypes.Text;
    repoUrl: EntryFieldTypes.Text;
  };
}

export interface Project {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
}
