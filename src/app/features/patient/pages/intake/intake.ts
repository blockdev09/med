import { Component, inject, OnInit, signal } from '@angular/core';
import { AppointmentService } from '../../../../services/appointment-service';
import { ActivatedRoute, Router } from '@angular/router';
import { form, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-intake',
  imports: [FormField],
  templateUrl: './intake.html',
  styleUrl: './intake.scss',
})
export class Intake implements OnInit {
  readonly appointmentService = inject(AppointmentService);
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);
  appointmentId = signal<string>('');
  intakeModel = signal({
    props1: '',
    props2: '',
    props3: '',
  });
  intakeForm = form(this.intakeModel, (path) => {
    required(path.props1, {
      message: 'Please describe...',
    });
    required(path.props2, {
      message: 'Please describe',
    });
    required(path.props3, {
      message: 'Please describe',
    });
  });

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.appointmentId.set(id);
    }
  }
  submitIntake(e: Event) {
    e.preventDefault();
    const intakeData = this.intakeModel();
    if (!intakeData) {
      return;
    }
    if (!intakeData.props1 || !intakeData.props2 || !intakeData.props3) {
      return;
    }
    const answers = {
      answers: {
        ...intakeData,
      },
    };
    this.appointmentService.completeIntake(answers, this.appointmentId()).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
  idFile = signal<File | null>(null);
  insuranceFile = signal<File | null>(null);
  recordsFile = signal<File | null>(null);

  idState = signal<'idle' | 'uploading' | 'done' | 'error'>('idle');
  insuranceState = signal<'idle' | 'uploading' | 'done' | 'error'>('idle');
  recordsState = signal<'idle' | 'uploading' | 'done' | 'error'>('idle');

  onFileSelect(event: Event, type: 'id' | 'insurance' | 'records') {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('File must be smaller than 5MB.');
      input.value = '';
      return;
    }

    const allowed = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowed.includes(file.type)) {
      alert('Only JPG, PNG and PDF files are allowed.');
      input.value = '';
      return;
    }

    if (type === 'id') this.idFile.set(file);
    if (type === 'insurance') this.insuranceFile.set(file);
    if (type === 'records') this.recordsFile.set(file);
  }

  uploadFile(type: 'id' | 'insurance' | 'records') {
    const file =
      type === 'id'
        ? this.idFile()
        : type === 'insurance'
          ? this.insuranceFile()
          : this.recordsFile();
    const stateSignal =
      type === 'id' ? this.idState : type === 'insurance' ? this.insuranceState : this.recordsState;

    if (!file) return;

    stateSignal.set('uploading');

    this.appointmentService.uploadDocument(this.appointmentId(), file).subscribe({
      next: () => stateSignal.set('done'),
      error: () => stateSignal.set('error'),
    });
  }
}
