import { Component, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AppointmentService } from '../../../../services/appointment-service';
import { IQueueItem } from '../../../../interfaces/appointment';
import { StateUi } from '../../../../shared/state-ui/state-ui';

@Component({
  selector: 'app-clinician-queue',
  imports: [DatePipe,StateUi],
  templateUrl: './queue.html',
  styleUrl: './queue.scss',
})
export class Queue implements OnInit {
  readonly appointmentService = inject(AppointmentService);
  readonly router = inject(Router);

  queue = signal<IQueueItem[]>([]);
  isLoading = signal(false);
  isError = signal(false);
  callingId = signal<string | null>(null);
  startingId = signal<string | null>(null);

  currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  ngOnInit() {
    this.loadQueue();
  }

  loadQueue() {
    this.isLoading.set(true);
    this.isError.set(false);

    // this.appointmentService.getQueue().subscribe({
    //   next: (res) => {
    //     const myPatients = res.filter(
    //       (item) => item.clinicianId === this.currentUser.id
    //     );
    //     this.queue.set(myPatients);
    //     this.isLoading.set(false);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.isError.set(true);
    //     this.isLoading.set(false);
    //   },
    // });
  }

  onCallPatient(appointmentId: string) {
    this.callingId.set(appointmentId);

    // this.appointmentService.callPatient(appointmentId).subscribe({
    //   next: () => {
    //     this.callingId.set(null);
    //     this.loadQueue();
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.callingId.set(null);
    //   },
    // });
  }

  onStartVisit(appointmentId: string) {
    this.startingId.set(appointmentId);

    // this.appointmentService.startVisit(appointmentId).subscribe({
    //   next: () => {
    //     this.startingId.set(null);
    //     this.router.navigate(['/clinician/visit', appointmentId]);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.startingId.set(null);
    //   },
    // });
  }
}