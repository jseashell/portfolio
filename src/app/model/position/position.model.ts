import { Company } from '../company/company.model';
import { PositionType } from '../position-type/position-type.model';

export interface Position {
  title: string;
  company: Company;
  positionType: PositionType;
  startDate: string;
  endDate?: string;
  description?: string;
}
