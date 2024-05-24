import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFarmaciaComponent } from './productos-farmacia.component';

describe('ProductosFarmaciaComponent', () => {
  let component: ProductosFarmaciaComponent;
  let fixture: ComponentFixture<ProductosFarmaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosFarmaciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
