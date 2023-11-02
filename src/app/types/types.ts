export type Doctor = {
  firstname: string;
  lastname: string;
  image?: string;
  title: Title;
  specialization: Specialization;
  schedule?: Schedule;
};

export type Title = "Dr." | "Dr.med" | "Lek.";

export type Specialization = "Pediatra" | "Lekarz rodzinny";

export type Schedule = {};

export type Visit =
  | "Wizyta kontrolna"
  | "Konsultacja"
  | "Choroba"
  | "Wypisanie recepty"
  | "Szczepienie";

export type Reservation = {
  doctor: Doctor;
  patient: Patient;
  visit: Visit;
  status: Status;
  date: Date;
};

export type Status = "Zarezerwowana" | "Anulowana" | "Zakończona";

export type Patient = {
  firstname: string;
  lastname: string;
  pesel: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  address: Address;
};

export type Address = {
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  postalCode: string;
  city: string;
  country: string;
};
