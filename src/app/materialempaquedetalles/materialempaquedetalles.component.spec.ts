import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialempaquedetallesComponent } from './materialempaquedetalles.component';

describe('MaterialempaquedetallesComponent', () => {
  let component: MaterialempaquedetallesComponent;
  let fixture: ComponentFixture<MaterialempaquedetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialempaquedetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialempaquedetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
