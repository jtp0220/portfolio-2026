export type SkillData = {
  title: string;
  type: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export type ResumeData = {
  program: string;
  school: string;
  period: string;
  other: string[];
  skills: SkillData[];
};
