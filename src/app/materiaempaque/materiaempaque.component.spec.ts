import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaempaqueComponent } from './materiaempaque.component';

describe('MateriaempaqueComponent', () => {
  let component: MateriaempaqueComponent;
  let fixture: ComponentFixture<MateriaempaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaempaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaempaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
