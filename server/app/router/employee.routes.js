const express = require("express");
const router = express.Router();
const {
  createNewEmployee,
  getAllEmployees,
  getAllEmployeesByEmployeeType,
  deleteEmployee,
  updateEmployee,
} = require("../controller/employee.controller");
const validation = require("../middleware/validationMiddleware");
const employeeSchema = require("../validation/employeeSchema");

router.post("/", validation(employeeSchema), createNewEmployee);

router.get("/", getAllEmployees);

router.put("/update/:emp_id", updateEmployee);

router.get("/employee_type/:emp_type", getAllEmployeesByEmployeeType);

router.delete("/:emp_id", deleteEmployee);

module.exports = router;
