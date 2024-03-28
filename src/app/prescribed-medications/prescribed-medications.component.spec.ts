import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribedMedicationsComponent } from './prescribed-medications.component';

describe('PrescribedMedicationsComponent', () => {
  let component: PrescribedMedicationsComponent;
  let fixture: ComponentFixture<PrescribedMedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescribedMedicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribedMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
