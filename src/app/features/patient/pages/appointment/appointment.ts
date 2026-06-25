import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { form, required, FormField } from '@angular/forms/signals';
import { AppointmentService } from '../../../../services/appointment-service';
import { IAppointment } from '../../../../interfaces/appointment';
import { StateUi } from '../../../../shared/components/state-ui/state-ui';

@Component({
  selector: 'app-appointments',
  imports: [DatePipe, RouterLink, StateUi, FormField],
  templateUrl: './appointments.html',
  styleUrl: './appointments.scss',
})
export class Appointments implements OnInit {
  readonly appointmentService = inject(AppointmentService);

  appointments = signal<IAppointment[]>([]);
  isLoading = signal(false);
  isError = signal(false);
  checkingInId = signal<string | null>(null);
  cancellingId = signal<string | null>(null);
  reschedulingId = signal<string | null>(null);
  showRescheduleFor = signal<string | null>(null);

  rescheduleModel = signal({ scheduledFor: '' });

  rescheduleForm = form(this.rescheduleModel, (path) => {
    required(path.scheduledFor, { message: 'Please select a new date and time' });
  });

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.isLoading.set(true);
    this.isError.set(false);

    this.appointmentService.getAllAppointments().subscribe({
      next: (res: any) => {
        this.appointments.set(res);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.isError.set(true);
        this.isLoading.set(false);
      },
    });
  }

  bookAppointments() {
    // open book form or navigate
  }

  checkIn(id: string) {
    this.checkingInId.set(id);

    this.appointmentService.checkInPatient(id).subscribe({
      next: () => {
        this.checkingInId.set(null);
        this.loadAppointments();
      },
      error: (err) => {
        console.log(err);
        this.checkingInId.set(null);
      },
    });
  }

  cancel(id: string) {
    this.cancellingId.set(id);

    this.appointmentService.cancelAppointment(id).subscribe({
      next: () => {
        this.cancellingId.set(null);
        this.loadAppointments();
      },
      error: (err) => {
        console.log(err);
        this.cancellingId.set(null);
      },
    });
  }

  toggleReschedule(id: string) {
    if (this.showRescheduleFor() === id) {
      this.showRescheduleFor.set(null);
      this.rescheduleModel.set({ scheduledFor: '' });
    } else {
      this.showRescheduleFor.set(id);
      this.rescheduleModel.set({ scheduledFor: '' });
    }
  }

  reschedule(id: string) {
    const date = this.rescheduleModel().scheduledFor;
    if (!date) return;

    this.reschedulingId.set(id);

    this.appointmentService.rescheduleAppointment(
      id,
      new Date(date).toISOString()
    ).subscribe({
      next: (res : any) => {
        this.reschedulingId.set(null);
        this.showRescheduleFor.set(null);
        this.rescheduleModel.set({ scheduledFor: '' });
        this.loadAppointments();
      },
      error: (err) => {
        console.log(err);
        this.reschedulingId.set(null);
      },
    });
  }
}