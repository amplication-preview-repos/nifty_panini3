import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type EmployeeUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  jobTitle?: string | null;
  name?: string | null;
};
