import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarmateriaprimaComponent } from './agregarmateriaprima.component';

describe('AgregarmateriaprimaComponent', () => {
  let component: AgregarmateriaprimaComponent;
  let fixture: ComponentFixture<AgregarmateriaprimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarmateriaprimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarmateriaprimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
