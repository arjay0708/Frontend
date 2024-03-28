import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionRequestsComponent } from './prescription-requests.component';

describe('PrescriptionRequestsComponent', () => {
  let component: PrescriptionRequestsComponent;
  let fixture: ComponentFixture<PrescriptionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
