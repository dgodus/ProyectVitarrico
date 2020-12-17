import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaprimadetallesComponent } from './materiaprimadetalles.component';

describe('MateriaprimadetallesComponent', () => {
  let component: MateriaprimadetallesComponent;
  let fixture: ComponentFixture<MateriaprimadetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaprimadetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaprimadetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
