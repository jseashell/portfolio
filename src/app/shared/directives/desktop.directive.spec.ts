import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DesktopDirective } from './desktop.directive';

describe('DesktopDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopDirective],
    }).compileComponents();
  });

  it('should create an instance', () => {
    const directive = inject(DesktopDirective);
    expect(directive).toBeTruthy();
  });
});
