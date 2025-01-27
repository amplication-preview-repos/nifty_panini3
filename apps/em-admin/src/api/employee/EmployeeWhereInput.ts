import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeWhereInput = {
  department?: DepartmentWhereUniqueInput;
  id?: StringFilter;
  jobTitle?: StringNullableFilter;
  name?: StringNullableFilter;
};
