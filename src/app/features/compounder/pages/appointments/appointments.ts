import { Component, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppointmentService } from '../../../../services/appointment-service';
import { IAppointment } from '../../../../interfaces/appointment';
import { StateUi } from '../../../../shared/state-ui/state-ui';

@Component({
  selector: 'app-compounder-appointments',
  imports: [DatePipe,StateUi],
  templateUrl: './appointments.html',
  styleUrl: './appointments.scss',
})
export class Appointments implements OnInit {
  readonly appointmentService = inject(AppointmentService);

  appointments = signal<IAppointment[]>([]);
  selectedAppointment = signal<IAppointment | null>(null);
  isLoading = signal(false);
  isError = signal(false);
  
  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.isLoading.set(true);
    this.isError.set(false);

    // this.appointmentService.getAppointments().subscribe({
    //   next: (res: any) => {
    //     this.appointments.set(res);
    //     this.isLoading.set(false);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //     this.isError.set(true);
    //     this.isLoading.set(false);
    //   },
    // });
  }

  selectAppointment(appointment: any) {
    if (this.selectedAppointment()?.id === appointment.id) {
      this.selectedAppointment.set(null);
    } else {
      this.selectedAppointment.set(appointment);
    }
  }
}