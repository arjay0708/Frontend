// doctor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = 'http://localhost:8080'; // Adjust the base URL according to your backend server

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/doctors`);
  }

  getDoctorById(doctorId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/doctors/${doctorId}`);
  }

  updateDoctor(doctorId: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/doctors/${doctorId}`, updatedData);
  }
}
