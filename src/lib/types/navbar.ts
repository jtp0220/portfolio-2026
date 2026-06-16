import { type IconType } from "react-icons";

export type NavTabData = {
  label: string;
  href: string;
};

export type SocialTabData = {
  icon: IconType;
  href: string;
};

export type HeaderData = {
  navTabs: NavTabData[];
  socialTabs: SocialTabData[];
};
