import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePagination from "../../hooks/usePagination";
import employeeServices from "../../services/employeeServices";
import AddEmployeeButton from "./AddEmployeeButton";
import Pagination from "../pagination/Pagination";
import SelectEmployeeType from "./SelectEmployeeType";
import SortingTable from "../sorting/SortingTable";
import useSortingTable from "../../hooks/useSortingTable";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [employee_type, setEmployee_type] = useState(0);
  const [sortedField, setSortedField] = useState(null);
  const { currentPage, setCurrentPage, indexFirstItem, indexLastItem, pages } =
    usePagination(employees);
  const [sorted, setSorted] = useState(false);
  const navigate = useNavigate();
  const { sortedEmployees } = useSortingTable(employees, sortedField, sorted);

  // to get all employees data
  const getAllEmployeesData = async () => {
    if (employee_type == 0) {
      const res = await employeeServices.getAllEmployees();
      setEmployees(res.data);
    } else {
      const res = await employeeServices.getAllEmployeesByEmployeeType(
        employee_type
      );
      setEmployees(res.data);
    }
  };

  // to delete employee data by id
  const deleteEmployee = async (emp_id) => {
    try {
      let option = window.confirm("Are you want to delete");
      if (option) {
        const res = await employeeServices.deleteEmployee(emp_id);
        alert(res.data.message);
        getAllEmployeesData();
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAllEmployeesData();
    setCurrentPage(1);
  }, [employee_type]);

  useEffect(() => {
    setEmployees([...sortedEmployees]);
  }, [sorted]);

  return (
    <div className="card">
      <div className="card-header p-3 fw-bold">People</div>
      <div className="card-body">
        <div className="d-flex justify-content-end m-2">
          <SelectEmployeeType
            employee_type={employee_type}
            setEmployee_type={setEmployee_type}
          />
          <AddEmployeeButton />
        </div>
        {employees.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  Display Name{" "}
                  <SortingTable
                    setSorted={setSorted}
                    sorted={sorted}
                    setSortedField={setSortedField}
                    field="display_name"
                  />
                </th>
                <th>Emp ID</th>
                <th>Designation</th>
                <th>Emp. Type</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              {employees
                .slice(indexFirstItem, indexLastItem)
                .map((employee, index) => {
                  return (
                    <tr key={index}>
                      <td>{employee.display_name}</td>
                      <td>{employee.emp_id}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.emp_type_name}</td>
                      <td>{employee.experience} Years</td>
                      <td>
                        <button
                          className="btn text-primary"
                          onClick={() =>
                            navigate(`/update-people/${employee.emp_id}`)
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="btn text-danger"
                          onClick={() => deleteEmployee(employee.emp_id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <h2>No Result</h2>
        )}
      </div>
      <div className="card-footer d-flex justify-content-center p-2">
        {employees.length > 0 ? (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        ) : null}
      </div>
    </div>
  );
};

export default EmployeeList;
