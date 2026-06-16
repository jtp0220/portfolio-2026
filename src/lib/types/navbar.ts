export type NavTabData = {
  label: string;
  href: string;
};

export type SocialTabData = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export type HeaderData = {
  navTabs: NavTabData[];
  socialTabs: SocialTabData[];
};
