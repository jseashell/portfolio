export type Project = {
  title: string;
  titleLinks?: Array<{
    href: string;
    tooltip: string;
    matIcon?: string;
    svgIcon?: string;
  }>;
  company?: string;
  yoe?: string;
  thumbnail: string;
  summary: string;
  body: string;
};
