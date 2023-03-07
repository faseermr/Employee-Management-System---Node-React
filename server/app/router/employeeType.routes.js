const express = require("express");
const router = express.Router();

const {
  getAllEmployeesTypes,
} = require("../controller/employeeType.controller");

// to get all employee types
router.get("/", getAllEmployeesTypes);

module.exports = router;
