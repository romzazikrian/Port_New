export type ProjectCategory = "Website" | "Android";

export interface Project {
  id: number;

  title: string;

  descriptionId: string;

  descriptionEn: string;

  category: ProjectCategory;

  image: string;

  github?: string;

  demo?: string;
}