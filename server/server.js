const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5000;
const dbConn = require("./app/config/db_config");

app.use(cors());
app.use(express.json());

const employeeRoutes = require("./app/router/employee.routes");
const employeeTypeRoutes = require("./app/router/employeeType.routes");
app.use("/api/employee", employeeRoutes);
app.use("/api/employee_type", employeeTypeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
