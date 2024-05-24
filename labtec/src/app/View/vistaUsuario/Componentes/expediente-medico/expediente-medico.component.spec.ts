import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteMedicoComponent } from './expediente-medico.component';

describe('ExpedienteMedicoComponent', () => {
  let component: ExpedienteMedicoComponent;
  let fixture: ComponentFixture<ExpedienteMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedienteMedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpedienteMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
