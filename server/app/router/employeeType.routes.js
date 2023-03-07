const express = require("express");
const router = express.Router();

const {
  getAllEmployeesTypes,
} = require("../controller/employeeType.controller");

router.get("/", getAllEmployeesTypes);
module.exports = router;
