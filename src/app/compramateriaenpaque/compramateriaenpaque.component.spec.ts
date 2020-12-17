import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompramateriaenpaqueComponent } from './compramateriaenpaque.component';

describe('CompramateriaenpaqueComponent', () => {
  let component: CompramateriaenpaqueComponent;
  let fixture: ComponentFixture<CompramateriaenpaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompramateriaenpaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompramateriaenpaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
