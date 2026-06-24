import { Component, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppointmentService } from '../../../../services/appointment-service';
import { IAppointment } from '../../../../interfaces/appointment';
import { form, required, FormField } from '@angular/forms/signals';
import { StateUi } from '../../../../shared/state-ui/state-ui';
@Component({
  selector: 'app-appointments',
  imports: [DatePipe, FormField, RouterLink,StateUi],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss',
})
export class Appointments implements OnInit {
  readonly appointmentService = inject(AppointmentService);

  appointments = signal<IAppointment[]>([]);
  isLoading = signal(false);
  isError = signal(false);
  isBooking = signal(false);
  showForm = signal(false);
  checkingInId = signal<string | null>(null);
  cancellingId = signal<string | null>(null);
  reschedulingId = signal<string | null>(null);
  showRescheduleFor = signal<string | null>(null);
  newScheduledFor = signal('');

  bookModel = signal({
    scheduledFor: '',
    reason: '',
    clinicianId: 'cmqrowjz40001rzeaskfs3gx0',
  });

  bookForm = form(this.bookModel, (path) => {
    required(path.scheduledFor, { message: 'Please select a date and time' });
    required(path.reason, { message: 'Please enter a reason' });
  });

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.isLoading.set(true);
    this.isError.set(false);

    // this.appointmentService.getAppointments().subscribe({
    //   next: (res) => {
    //     this.appointments.set(res);
    //     this.isLoading.set(false);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.isError.set(true);
    //     this.isLoading.set(false);
    //   },
    // });
  }

  toggleForm() {
    this.showForm.update((v) => !v);
  }

  onBook() {
    const data = this.bookModel();
    if (!data.scheduledFor || !data.reason) return;

    this.isBooking.set(true);

    // this.appointmentService.bookAppointment(data).subscribe({
    //   next: () => {
    //     this.isBooking.set(false);
    //     this.showForm.set(false);
    //     this.bookModel.set({
    //       scheduledFor: '',
    //       reason: '',
    //       clinicianId: 'cmqrowjz40001rzeaskfs3gx0',
    //     });
    //     this.loadAppointments();
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.isBooking.set(false);
    //   },
    // });
  }

  onCheckIn(id: string) {
    this.checkingInId.set(id);

    // this.appointmentService.checkIn(id).subscribe({
    //   next: () => {
    //     this.checkingInId.set(null);
    //     this.loadAppointments();
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.checkingInId.set(null);
    //   },
    // });
  }

  onCancel(id: string) {
    this.cancellingId.set(id);

    // this.appointmentService.cancelAppointment(id).subscribe({
    //   next: () => {
    //     this.cancellingId.set(null);
    //     this.loadAppointments();
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.cancellingId.set(null);
    //   },
    // });
  }

  toggleReschedule(id: string) {
    if (this.showRescheduleFor() === id) {
      this.showRescheduleFor.set(null);
      this.newScheduledFor.set('');
    } else {
      this.showRescheduleFor.set(id);
      this.newScheduledFor.set('');
    }
  }

  onReschedule(id: string) {
    const date = this.newScheduledFor();
    if (!date) return;

    this.reschedulingId.set(id);

    // this.appointmentService.rescheduleAppointment(id, date).subscribe({
    //   next: () => {
    //     this.reschedulingId.set(null);
    //     this.showRescheduleFor.set(null);
    //     this.newScheduledFor.set('');
    //     this.loadAppointments();
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.reschedulingId.set(null);
    //   },
    // });
  }
}