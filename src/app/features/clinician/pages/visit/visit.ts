import { Component, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../../services/appointment-service';
import { IAppointment, INote } from '../../../../interfaces/appointment';
import { StateUi } from '../../../../shared/state-ui/state-ui';

@Component({
  selector: 'app-clinician-visit',
  imports: [DatePipe,StateUi],
  templateUrl: './visit.html',
  styleUrl: './visit.scss',
})
export class Visit implements OnInit {
  readonly appointmentService = inject(AppointmentService);
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);

  appointment = signal<IAppointment | null>(null);
  notes = signal<INote[]>([]);
  isLoading = signal(false);
  isError = signal(false);
  isCompleting = signal(false);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.loadVisit(id);
  }

  loadVisit(id: string) {
    this.isLoading.set(true);
    this.isError.set(false);

    // this.appointmentService.getAppointmentById(id).subscribe({
    //   next: (res) => {
    //     this.appointment.set(res);
    //     this.loadNotes(id);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.isError.set(true);
    //     this.isLoading.set(false);
    //   },
    // });
  }

  loadNotes(id: string) {
    // this.appointmentService.getNotes(id).subscribe({
    //   next: (res) => {
    //     this.notes.set(res);
    //     this.isLoading.set(false);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.isLoading.set(false);
    //   },
    // });
  }

  onCompleteVisit() {
    const id = this.appointment()?.id;
    if (!id) return;

    this.isCompleting.set(true);

    // this.appointmentService.completeVisit(id).subscribe({
    //   next: () => {
    //     this.isCompleting.set(false);
    //     this.router.navigate(['/clinician/queue']);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.isCompleting.set(false);
    //   },
    // });
  }
}