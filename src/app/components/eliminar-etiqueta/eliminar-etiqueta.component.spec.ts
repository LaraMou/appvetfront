import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEtiquetaComponent } from './eliminar-etiqueta.component';

describe('EliminarEtiquetaComponent', () => {
  let component: EliminarEtiquetaComponent;
  let fixture: ComponentFixture<EliminarEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEtiquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
