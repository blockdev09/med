import { Component, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppointmentService } from '../../../../services/appointment-service';
import { IQueueItem } from '../../../../interfaces/appointment';
import { StateUi } from '../../../../shared/state-ui/state-ui';

@Component({
  selector: 'app-compounder-queue',
  imports: [DatePipe,StateUi],
  templateUrl: './queue.html',
  styleUrl: './queue.scss',
})
export class Queue implements OnInit {
  readonly appointmentService = inject(AppointmentService);

  queue = signal<IQueueItem[]>([]);
  isLoading = signal(false);
  isError = signal(false);
  checkingInId = signal<string | null>(null);

  ngOnInit() {
    this.loadQueue();
  }

  loadQueue() {
    this.isLoading.set(true);
    this.isError.set(false);

    // this.appointmentService.getQueue().subscribe({
    //   next: (res: IQueueItem[]) => {
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

  onCheckIn(appointmentId: string) {
    this.checkingInId.set(appointmentId);

    // this.appointmentService.checkIn(appointmentId).subscribe({
    //   next: () => {
    //     this.checkingInId.set(null);
    //     this.loadQueue();
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //     this.checkingInId.set(null);
    //   },
    // });
  }
}