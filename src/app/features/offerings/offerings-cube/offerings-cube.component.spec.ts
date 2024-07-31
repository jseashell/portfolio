import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingsCubeComponent } from './offerings-cube.component';

describe('OfferingsCubeComponent', () => {
  let component: OfferingsCubeComponent;
  let fixture: ComponentFixture<OfferingsCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferingsCubeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferingsCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
