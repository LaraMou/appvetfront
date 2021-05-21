import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleExpertoComponent } from './detalle-experto.component';

describe('DetalleExpertoComponent', () => {
  let component: DetalleExpertoComponent;
  let fixture: ComponentFixture<DetalleExpertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleExpertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleExpertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
