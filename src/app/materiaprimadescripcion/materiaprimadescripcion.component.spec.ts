import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaprimadescripcionComponent } from './materiaprimadescripcion.component';

describe('MateriaprimadescripcionComponent', () => {
  let component: MateriaprimadescripcionComponent;
  let fixture: ComponentFixture<MateriaprimadescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaprimadescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaprimadescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
