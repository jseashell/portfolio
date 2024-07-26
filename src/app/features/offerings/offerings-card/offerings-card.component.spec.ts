import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingsCardComponent } from './offerings-card.component';

describe('OfferingsCardComponent', () => {
  let component: OfferingsCardComponent;
  let fixture: ComponentFixture<OfferingsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferingsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
