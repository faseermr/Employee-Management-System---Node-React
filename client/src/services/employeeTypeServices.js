import http from "./http";

const getAllEmployeesTypes = () => {
  return http.get(`/employee_type`);
};

export default {
  getAllEmployeesTypes,
};
