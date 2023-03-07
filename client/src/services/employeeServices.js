import http from "./http";

const getAllEmployees = () => {
  return http.get("/employee");
};

const getAllEmployeesByEmployeeType = (emp_type) => {
  return http.get(`/employee/employee_type/${emp_type}`);
};

const addNewEmployee = (employee) => {
  return http.post(`/employee`, employee);
};

const deleteEmployee = (emp_id) => {
  return http.delete(`/employee/${emp_id}`);
};

const updateEmployee = (emp_id, employee) => {
  return http.put(`/employee/update/${emp_id}`, employee);
};

export default {
  getAllEmployees,
  getAllEmployeesByEmployeeType,
  addNewEmployee,
  deleteEmployee,
  updateEmployee,
};
