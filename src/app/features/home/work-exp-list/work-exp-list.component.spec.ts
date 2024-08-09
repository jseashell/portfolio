import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpListComponent } from './work-exp-list.component';

describe('WorkExpListComponent', () => {
  let component: WorkExpListComponent;
  let fixture: ComponentFixture<WorkExpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExpListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
