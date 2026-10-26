export interface SiteConfig {
  author: string;
  role: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    cv: string;
    lab: string;
  };
}

export const siteConfig: SiteConfig = {
  author: "Fernando Morán",
  role: "Full-Stack Developer",
  email: "nandomorancoronel@gmail.com",
  links: {
    github: "https://github.com/Nandofernando28",
    linkedin: "https://www.linkedin.com/in/fernando-mor%C3%A1n",
    cv: "/cv-fernando-moran.pdf",
    lab: "/lab"
  }
};
