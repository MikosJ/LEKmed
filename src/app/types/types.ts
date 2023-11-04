export type Doctor = {
  firstname: string;
  lastname: string;
  image?: string;
  title: Title;
  specialization: Specialization;
  availableTimes: AvailableTimes[];
  description: string;
};

export type Title = "Dr." | "Dr.med" | "Lek.";

export type Specialization = "Pediatra" | "Lekarz rodzinny";

export type AvailableTimes = {
  date: Date;
  hours: string[];
};

export enum Visit {
  control = "Wizyta kontrolna",
  consultation = "Konsultacja",
  illness = "Choroba",
  prescription = "Wypisanie recepty",
  vaccination = "Szczepienie",
}

export type Reservation = {
  doctor: Doctor;
  patient: Patient;
  visit: Visit;
  status: Status;
  price: Price;
  date: [Date, string];
};

export type Price = {
  value: number;
  currency: "PLN" | "EUR";
};

export type Status = "Zarezerwowana" | "Anulowana" | "Zakończona";

export type Patient = {
  firstname: string;
  lastname: string;
  pesel: string;
  email?: string;
  phone?: string;
  dateOfBirth: Date;
  address?: Address;
};

export type Address = {
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  postalCode: string;
  city: string;
  country: string;
};
