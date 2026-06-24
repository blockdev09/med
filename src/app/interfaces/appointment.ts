export interface IPatient {
  id: string;
  name: string;
  email: string;
}

export interface IClinician {
  id: string;
  name: string;
  specialty: string;
}

export interface IIntake {
  status: string;
  symptoms?: string;
  allergies?: string;
  currentMedications?: string;
  notes?: string;
}

export interface IAppointment {
  id: string;
  patientId: string;
  clinicianId: string;
  scheduledFor: string;
  reason: string;
  status: 'BOOKED' | 'CHECKED_IN' | 'CALLED' | 'IN_VISIT' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
  updatedAt: string;
  patient?: IPatient;
  clinician?: IClinician;
  intake?: IIntake;
}

export interface IQueueItem {
  appointmentId: string;
  patientId: string;
  clinicianId: string;
  reason: string;
  status: string;
  checkedInAt: string;
  patient?: IPatient;
}

export interface INote {
  id: string;
  content: string;
  createdAt: string;
  clinicianName: string;
}

export interface IBookAppointment {
  scheduledFor: string;
  reason: string;
  clinicianId: string;
}