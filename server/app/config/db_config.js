// database configuration
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employment_management_system",
  multipleStatements: true,
});

// test database connection
connection.connect((err) => {
  if (err) {
    console.log("Not connected");
  } else {
    console.log("Database Connected");
  }
});

module.exports = connection;
