const express = require("express");
const router = express.Router();
const {
  createNewEmployee,
  getAllEmployees,
  getAllEmployeesByEmployeeType,
  deleteEmployee,
  updateEmployee,
  getEmployeeById,
} = require("../controller/employee.controller");
const validation = require("../middleware/validationMiddleware");
const employeeSchema = require("../validation/employeeSchema");

// To add new employee
router.post("/", validation(employeeSchema), createNewEmployee);

// to get all employess
router.get("/", getAllEmployees);

// to update employee
router.put("/update/:emp_id", updateEmployee);

// to get all employees by employee type
router.get("/employee_type/:emp_type", getAllEmployeesByEmployeeType);

// to get employees by employee id
router.get("/employee_id/:emp_id", getEmployeeById);

// to delete employee by employee id
router.delete("/:emp_id", deleteEmployee);

module.exports = router;
