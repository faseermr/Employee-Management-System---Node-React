import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSortAlt2 } from "react-icons/bi";
import employeeServices from "../../services/employeeServices";
import AddEmployeeButton from "./AddEmployeeButton";
import Pagination from "../pagination/Pagination";
import SelectEmployeeType from "./SelectEmployeeType";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [employee_type, setEmployee_type] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [indexLastItem, setIndexLastItem] = useState(currentPage * itemPerPage);
  const [indexFirstItem, setIndexFirstItem] = useState(
    indexLastItem - itemPerPage
  );
  const [pages, setPages] = useState([]);
  const [sorted, setSorted] = useState(false);
  const navigate = useNavigate();

  const getAllEmployeesData = async () => {
    if (employee_type == 0) {
      const res = await employeeServices.getAllEmployees();
      setEmployees(res.data);
      //console.log(res);
    } else {
      const res = await employeeServices.getAllEmployeesByEmployeeType(
        employee_type
      );
      setEmployees(res.data);
    }
  };

  // const handleSorting = (sortField, sortOrder) => {
  //   console.log(sortField, sortOrder)
  //  };
  // const sortEmployeesData = () => {
  //   console.log("sort");
  //   let sortArr = employees.sort((a, b) =>
  //     a.display_name.localeCompare(b.display_name)
  //   );
  //   console.log(sortArr);
  //   setEmployees(sortArr);
  // };
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
  }, [employee_type]);

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(employees.length / itemPerPage); i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }
  }, [employees]);

  useEffect(() => {
    setIndexLastItem(currentPage * itemPerPage);
    setIndexFirstItem(indexLastItem - itemPerPage);
  }, [currentPage, indexLastItem]);

  // sorted function
  useEffect(() => {
    let sortedEmployees;
    if (sorted) {
      sortedEmployees = employees.sort((a, b) =>
        a.display_name.localeCompare(b.display_name)
      );
    } else {
      sortedEmployees = employees.sort((a, b) =>
        b.display_name.localeCompare(a.display_name)
      );
    }
    setEmployees(sortedEmployees);
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                Display Name{" "}
                <BiSortAlt2
                  onClick={() => setSorted(!sorted)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
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
                        className="btn text-danger"
                        onClick={() =>
                          navigate(`/update-people/${employee.emp_id}`)
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="btn text-primary"
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
      </div>
      <div className="card-footer d-flex justify-content-center p-2">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={pages}
        />
      </div>
    </div>
  );
};

export default EmployeeList;
