export type Site = {
  NAME: string;
  CREDITS: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type DateItemList = {
  TITLE: string;
  DESCRIPTION?: string;
  HREF?: string;
  DATE: string;
}[]
