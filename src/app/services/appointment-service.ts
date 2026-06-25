import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  readonly http = inject(HttpClient);
  readonly baseUrl = 'https://xhkrpfff-7000.inc1.devtunnels.ms';

  getAppointments() {
    // return this.http.get<IAppointment[]>(`${this.baseUrl}/appointments`);
  }

  getAppointmentById(id: string) {
    // return this.http.get<IAppointment>(`${this.baseUrl}/appointments/${id}`);
  }

  bookAppointment(data: { scheduledFor: string; reason: string; clinicianId: string }) {
    // return this.http.post<IAppointment>(`${this.baseUrl}/appointments`, data);
  }

  cancelAppointment(id: string) {
    // return this.http.post<IAppointment>(`${this.baseUrl}/appointments/${id}/cancel`, {});
  }

  rescheduleAppointment(id: string, scheduledFor: string) {
    // return this.http.post<IAppointment>(`${this.baseUrl}/appointments/${id}/reschedule`, { scheduledFor });
  }
  getQueue() {
    // return this.http.get<IQueueItem[]>(`${this.baseUrl}/queue`);
  }
  getNotes(id: string) {
    // return this.http.get<INote[]>(`${this.baseUrl}/appointments/${id}/notes`);
  }
  checkIn(id: string) {
    // return this.http.post<IAppointment>(`${this.baseUrl}/appointments/${id}/check-in`, {});
  }
  callPatient(id: string) {
    // return this.http.post<IAppointment>(`${this.baseUrl}/appointments/${id}/call`, {});
  }

  startVisit(id: string) {
    // return this.http.post<IAppointment>(`${this.baseUrl}/appointments/${id}/start`, {});
  }
  completeVisit(id: string) {
    // return this.http.post<IAppointment>(`${this.baseUrl}/appointments/${id}/complete`, {});
  }

  addNote(id: string, content: string) {
    // return this.http.post<INote>(`${this.baseUrl}/appointments/${id}/notes`, { content });
  }
  uploadDocument(id: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/appointments/${id}/documents`, formData);
  }
}
