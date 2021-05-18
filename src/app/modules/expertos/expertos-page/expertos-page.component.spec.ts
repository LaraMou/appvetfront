import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertosPageComponent } from './expertos-page.component';

describe('ExpertosPageComponent', () => {
  let component: ExpertosPageComponent;
  let fixture: ComponentFixture<ExpertosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
