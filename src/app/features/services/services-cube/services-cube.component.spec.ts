import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCubeComponent } from './services-cube.component';

describe('ServicesCubeComponent', () => {
  let component: ServicesCubeComponent;
  let fixture: ComponentFixture<ServicesCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCubeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
