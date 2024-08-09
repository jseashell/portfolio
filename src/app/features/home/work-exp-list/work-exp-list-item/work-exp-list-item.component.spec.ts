import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpListItemComponent } from './work-exp-list-item.component';

describe('WorkExpListItemComponent', () => {
  let component: WorkExpListItemComponent;
  let fixture: ComponentFixture<WorkExpListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExpListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExpListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
