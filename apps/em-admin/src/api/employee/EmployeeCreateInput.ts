import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type EmployeeCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  jobTitle?: string | null;
  name?: string | null;
};
