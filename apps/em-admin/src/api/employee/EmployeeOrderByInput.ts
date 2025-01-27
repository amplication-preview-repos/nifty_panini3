import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  jobTitle?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
