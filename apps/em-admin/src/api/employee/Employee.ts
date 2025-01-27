import { Department } from "../department/Department";

export type Employee = {
  createdAt: Date;
  department?: Department | null;
  id: string;
  jobTitle: string | null;
  name: string | null;
  updatedAt: Date;
};
