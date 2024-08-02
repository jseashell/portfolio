import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MobileDirective } from './mobile.directive';

describe('MobileDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileDirective],
    }).compileComponents();
  });

  it('should create an instance', () => {
    const directive = inject(MobileDirective);
    expect(directive).toBeTruthy();
  });
});
