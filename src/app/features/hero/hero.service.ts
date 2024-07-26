import { Injectable } from '@angular/core';
import { concat, concatMap, delay, from, ignoreElements, interval, map, Observable, of, repeat, take } from 'rxjs';

interface TypeParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

/** Credit: https://medium.com/@nikolovlyudmil/typewriter-animation-in-angular-17-f1c503058d41 */
@Injectable()
export class HeroService {
  typewriter$(titles: string[]): Observable<string> {
    return from(titles).pipe(
      concatMap((title) => this.typeEffect(title)),
      repeat(),
    );
  }

  private typeEffect(word: string): Observable<string> {
    return concat(
      this.type({ word, speed: 50 }),
      of('').pipe(delay(2000), ignoreElements()),
      this.type({ word, speed: 25, backwards: true }),
      of('').pipe(delay(500), ignoreElements()),
    );
  }

  private type({ word, speed, backwards = false }: TypeParams): Observable<string> {
    return interval(speed).pipe(
      map((x) => {
        return backwards ? word.substring(0, word.length - x) : word.substring(0, x + 1);
      }),
      take(word.length + 1),
    );
  }
}
