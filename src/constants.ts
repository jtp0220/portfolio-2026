import LinkedinIcon from "./assets/icons/linkedin-icon.svg?react";
import GithubIcon from "./assets/icons/github-icon.svg?react";
import InstagramIcon from "./assets/icons/instagram-icon.svg?react";

type NavTab = {
  label: string;
  href: string;
};

type SocialTab = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
};

type HeaderData = {
  navTabs: NavTab[];
  socialTabs: SocialTab[];
};

export const HeaderData: HeaderData = {
  navTabs: [
    {
      label: "Home",
      href: "#hero",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Resume",
      href: "#resume",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Photography",
      href: "#photography",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],

  socialTabs: [
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/jeremytranperez",
    },
    {
      icon: GithubIcon,
      href: "https://github.com/jtp0220",
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com/jeremytranperez",
    },
  ],
};
