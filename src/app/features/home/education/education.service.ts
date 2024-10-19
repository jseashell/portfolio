import { Injectable } from '@angular/core';
import dayjs from 'dayjs';
import { Observable, of } from 'rxjs';
import { EducationAttributes } from './education.interface';

@Injectable()
export class EducationService {
  get data$(): Observable<EducationAttributes[]> {
    return of([
      {
        title: 'Master of Science',
        subtitle: 'Engineering Management',
        school: 'University of Dayton',
        location: 'Dayton, OH',
        graduationDate: dayjs('2015-08-01'),
        thumbnail: '/images/dayton2.png',
      },
      {
        title: 'Bachelor of Science',
        subtitle: 'Electronic and Computer Engineering Technology',
        school: 'University of Dayton',
        location: 'Dayton, OH',
        graduationDate: dayjs('2014-05-01'),
        thumbnail: '/images/dayton1.png',
      },
    ]);
  }
}
