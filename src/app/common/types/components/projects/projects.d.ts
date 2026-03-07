export type Project = {
  title: string;
  status: 'live' | 'demo' | 'offline' | 'acquired';
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
