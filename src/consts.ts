import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "a mini site",
  EMAIL: "minnie.pangilinan@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "home",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "about me"
}

export const BLOG: Metadata = {
  TITLE: "Notes",
  DESCRIPTION: "little notes",
};

export const WORKS: Metadata = {
  TITLE: "Works",
  DESCRIPTION: "a showcase of my projects",
};

export const ATBP: Metadata = {
  TITLE: "At Iba Pa",
  DESCRIPTION: "other things in life",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/kotsengkuba"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/minnie-pangilinan",
  },
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/minniemakestoys/"
  },
  {
    NAME: "behance",
    HREF: "https://www.behance.net/kotsengkuba"
  }
];
