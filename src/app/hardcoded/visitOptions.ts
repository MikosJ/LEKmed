import { Visit } from "../types/types";

export const visitOptions = [
  { value: Visit.control, label: "Wizyta kontrolna" },
  { value: Visit.consultation, label: "Konsultacja" },
  { value: Visit.illness, label: "Choroba" },
  { value: Visit.prescription, label: "Wypisanie recepty" },
  { value: Visit.vaccination, label: "Szczepienie" },
];
