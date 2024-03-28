// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MedicationsComponent } from './medications/medications.component';
import { PrescriptionRequestsComponent } from './prescription-requests/prescription-requests.component';
import { PrescribedMedicationsComponent } from './prescribed-medications/prescribed-medications.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'patients', component: PatientsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'medications', component: MedicationsComponent },
  { path: 'prescription-requests', component: PrescriptionRequestsComponent },
  { path: 'prescribed-medications', component: PrescribedMedicationsComponent },
  { path: 'prescriptions', component: PrescriptionsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
