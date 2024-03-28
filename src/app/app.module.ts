import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MedicationsComponent } from './medications/medications.component';
import { PrescriptionRequestsComponent } from './prescription-requests/prescription-requests.component';
import { PrescribedMedicationsComponent } from './prescribed-medications/prescribed-medications.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    DoctorsComponent,
    MedicationsComponent,
    PrescriptionRequestsComponent,
    PrescribedMedicationsComponent,
    PrescriptionsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
