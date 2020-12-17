import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedordetallesComponent } from './proveedordetalles.component';

describe('ProveedordetallesComponent', () => {
  let component: ProveedordetallesComponent;
  let fixture: ComponentFixture<ProveedordetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedordetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedordetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
