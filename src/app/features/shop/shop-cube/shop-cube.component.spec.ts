import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCubeComponent } from './shop-cube.component';

describe('ShopCubeComponent', () => {
  let component: ShopCubeComponent;
  let fixture: ComponentFixture<ShopCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCubeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
