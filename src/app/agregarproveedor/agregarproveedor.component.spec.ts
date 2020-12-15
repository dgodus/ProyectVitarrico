import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarproveedorComponent } from './agregarproveedor.component';

describe('AgregarproveedorComponent', () => {
  let component: AgregarproveedorComponent;
  let fixture: ComponentFixture<AgregarproveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarproveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
