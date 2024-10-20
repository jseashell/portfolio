import { Dayjs } from 'dayjs';

export interface EducationAttributes {
  title: string;
  subtitle: string;
  school: string;
  location: string;
  graduationDate: Dayjs;
  thumbnail: string;
}
