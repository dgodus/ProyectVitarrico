import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarmaterialempaqueComponent } from './agregarmaterialempaque.component';

describe('AgregarmaterialempaqueComponent', () => {
  let component: AgregarmaterialempaqueComponent;
  let fixture: ComponentFixture<AgregarmaterialempaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarmaterialempaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarmaterialempaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
