const dbConn = require("../config/db_config");

module.exports = {
  // to get all employee types
  getAllEmployeesTypes: () => {
    return new Promise((resolve, reject) => {
      dbConn.query(`Select * from employee_types`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
};
