import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNavComponent } from './toolbar-nav.component';

describe('ToolbarNavComponent', () => {
  let component: ToolbarNavComponent;
  let fixture: ComponentFixture<ToolbarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
