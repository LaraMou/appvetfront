import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertListaComponent } from './expert-lista.component';

describe('ExpertListaComponent', () => {
  let component: ExpertListaComponent;
  let fixture: ComponentFixture<ExpertListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
