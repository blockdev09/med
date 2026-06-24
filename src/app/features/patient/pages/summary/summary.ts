import { Component, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppointmentService } from '../../../../services/appointment-service';
import { IAppointment, INote } from '../../../../interfaces/appointment';
import { StateUi } from '../../../../shared/state-ui/state-ui';

@Component({
  selector: 'app-summary',
  imports: [DatePipe, RouterLink,StateUi],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class Summary implements OnInit {
  readonly appointmentService = inject(AppointmentService);
  readonly route = inject(ActivatedRoute);

  appointment = signal<IAppointment | null>(null);
  notes = signal<INote[]>([]);
  isLoading = signal(false);  
  isError = signal(false);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.loadSummary(id);
  }

  loadSummary(id: string) {
    this.isLoading.set(true);
    this.isError.set(false);

    // this.appointmentService.getAppointmentById(id).subscribe({
    //   next: (res: any) => {
    //     this.appointment.set(res);
    //     this.loadNotes(id);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //     this.isError.set(true);
    //     this.isLoading.set(false);
    //   },
    // });
  }

  loadNotes(id: string) {
    // this.appointmentService.getNotes(id).subscribe({
    //   next: (res: any) => {
    //     this.notes.set(res);
    //     this.isLoading.set(false);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //     this.isLoading.set(false);
    //   },
    // });
  }
}