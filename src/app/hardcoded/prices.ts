import { Visit } from "../types/types.ts";

export const prices: Record<Visit, number> = {
  [Visit.control]: 100,
  [Visit.consultation]: 150,
  [Visit.illness]: 200,
  [Visit.prescription]: 80,
  [Visit.vaccination]: 120,
};
