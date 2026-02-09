import { Injectable } from '@angular/core';
import { TypewriterParams } from '@app/common/types';
import {
  concat,
  concatMap,
  delay,
  from,
  ignoreElements,
  interval,
  map,
  Observable,
  of,
  repeat,
  take,
} from 'rxjs';

/** Credit: https://medium.com/@nikolovlyudmil/typewriter-animation-in-angular-17-f1c503058d41 */
@Injectable({ providedIn: 'root' })
export class TypewriterService {
  typewriter$(subtitles: string[]): Observable<string> {
    return from(subtitles).pipe(
      concatMap((subtitle) =>
        concat(
          this.type({ subtitle, speed: 50 }),
          of('').pipe(delay(2000), ignoreElements()),
          this.type({ subtitle, speed: 25, backwards: true }),
          of('').pipe(delay(500), ignoreElements()),
        ),
      ),
      repeat(),
    );
  }

  private type({ subtitle, speed, backwards = false }: TypewriterParams): Observable<string> {
    return interval(speed).pipe(
      map((x) => {
        return backwards
          ? subtitle.substring(0, subtitle.length - x)
          : subtitle.substring(0, x + 1);
      }),
      take(subtitle.length + 1),
    );
  }
}
