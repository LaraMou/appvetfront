import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetasPageComponent } from './etiquetas-page.component';

describe('EtiquetasPageComponent', () => {
  let component: EtiquetasPageComponent;
  let fixture: ComponentFixture<EtiquetasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtiquetasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
