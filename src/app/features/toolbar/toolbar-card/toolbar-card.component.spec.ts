import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCardComponent } from './toolbar-card.component';

describe('ToolbarCardComponent', () => {
  let component: ToolbarCardComponent;
  let fixture: ComponentFixture<ToolbarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
