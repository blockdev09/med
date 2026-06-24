import { Component, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppointmentService } from '../../../../services/appointment-service';
import { StateUi } from '../../../../shared/state-ui/state-ui';

@Component({
  selector: 'app-queue',
  imports: [DatePipe,StateUi],
  templateUrl: './queue.html',
  styleUrl: './queue.scss',
})
export class Queue implements OnInit {
  readonly appointmentService = inject(AppointmentService);

  queue = signal<any[]>([]);
  isLoading = signal(false);
  isError = signal(false);

  currentUser = JSON.parse(localStorage.getItem('user') || '{}');

  ngOnInit() {
    this.loadQueue();
  }

  loadQueue() {
    this.isLoading.set(true);
    this.isError.set(false);

    // this.appointmentService.getQueue().subscribe({
    //   next: (res: any) => {
    //     this.queue.set(res);
    //     this.isLoading.set(false);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //     this.isError.set(true);
    //     this.isLoading.set(false);
    //   },
    // });
  }

  myPosition() {
    const index = this.queue().findIndex(
      (item) => item.patientId === this.currentUser.id
    );
    return index === -1 ? null : index + 1;
  }
}