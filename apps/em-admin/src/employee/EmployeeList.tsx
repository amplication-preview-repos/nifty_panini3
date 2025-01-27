import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Department"
          source="department.id"
          reference="Department"
        >
          <TextField source={DEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="JobTitle" source="jobTitle" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
