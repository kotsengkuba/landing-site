import type { Site, Metadata, Socials, DateItemList } from "@types";

export const SITE: Site = {
  NAME: "minniemakes.co",
  CREDITS: "minnie pangilinan",
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

export const NOW: Metadata = {
  TITLE: "Now",
  DESCRIPTION: "updates",
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

export const EDUC: DateItemList = [
  {
    TITLE: "Master in Design for Emergent Futures",
    DESCRIPTION: "Institute for Advanced Architecture of Catalonia, FABLAB Barcelona, ELISAVA School of Design and Engineering",
    DATE: "2024",
    HREF: "https://minnie-at-iaac.github.io/"
  },
  {
    TITLE: "BFA Industrial Design",
    DESCRIPTION: "University of the Philippines Diliman (Magna Cum Laude)",
    DATE: "2020",
  },
  {
    TITLE: "BS Computer Science",
    DESCRIPTION: "University of the Philippines Diliman",
    DATE: "2014",
  }
]

export const EXHIBITS: DateItemList = [
  {
    TITLE: "ELISAVA Gradshow",
    DESCRIPTION: "TMDC, Barcelona",
    DATE: "2024"
  },
  {
    TITLE: "Shaping Future Cities: IAAC 2024 Graduation Exhibition",
    DESCRIPTION: "IAAC Atalier, Barcelona",
    DATE: "2024"
  },
  {
    TITLE: "MDEFest: Alquimia",
    DESCRIPTION: "SSUAVE, Barcelona",
    DATE: "2024"
  },
  {
    TITLE: "MDEF Team Player Award",
    DESCRIPTION: "Received at the IAAC Academic Excellence Awards 2024",
    DATE: "2024",
  },
  {
    TITLE: "Pure Gold. Upcycled! Upgraded! Workshop and Exhibition",
    DESCRIPTION: "Disseny Hub, Barcelona",
    HREF: "https://pure-gold.org/barcelona/",
    DATE: "2024",
  },
  {
    TITLE: "Tatler Asia Gen T List Honouree",
    HREF: "https://www.tatlerasia.com/people/minnie-pangilinan",
    DATE: "2023",
  },
  {
    TITLE: "PSMO Annual Conference",
    DATE: "2022",
    DESCRIPTION: "Presented Brakong with Roche Philippines",
  },
  {
    TITLE: "UNDP Circularity in the City",
    DESCRIPTION: "Presented Brakong. SEDA Hotel, Quezon City",
    DATE: "2022",
  },
  {
    TITLE: "6th Southeast Asian Breast Cancer Symposium",
    DATE: "2022",
    DESCRIPTION: "Presented Brakong"
  },
  {
    TITLE: "James Dyson Award",
    DATE: "2022",
    DESCRIPTION: "National Winner and International Top 20 for Brakong",
  },
  {
    TITLE: "James Dyson Award",
    DATE: "2020",
    DESCRIPTION: "National Runner-up for Box Office"
  },
  {
    TITLE: "Inno-B Generation Award",
    DATE: "2020",
    DESCRIPTION: "Received 2 Nominations: POWR and KLEANR (by AA3 Design Studio)",
  },
  {
    TITLE: "Philippine Innovation Challenge (PIC)",
    DATE: "2020",
    DESCRIPTION: "Received the Unionbank Better World Prize",
  },
  {
    TITLE: "iD!D . Industrial Design Student Exhibit",
    DATE: "2018, 2019",
  },
  {
    TITLE: "UID Block Exhibitions: Wath If? And Banyuhay",
    DATE: "2017, 2018",
  },
  {
    TITLE: "School of Fashion and the Arts (SOFA) Design Institute: Co-Live/Co-Work Competition",
    DATE: "2018",
  },
  {
    TITLE: "Quan: A One-Woman Show",
    DESCRIPTION: "My very first solo exhibit at Pisay!",
    DATE: "2009",
  }
]
