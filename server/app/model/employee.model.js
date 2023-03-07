const dbConn = require("../config/db_config");

module.exports = {
  // To add new employee
  createNewEmployee: (employee) => {
    let {
      full_name,
      name_initial,
      display_name,
      gender_id,
      date_of_birth,
      email,
      mobile_no,
      designation,
      emp_type,
      join_date,
      experience,
      salary,
      personal_notes,
    } = employee;
    return new Promise((resolve, reject) => {
      dbConn.query(
        `INSERT INTO employees(full_name, name_initial, display_name, gender_id, date_of_birth, email,
             mobile_no, designation, emp_type, join_date, experience, salary, personal_notes) 
             VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
          full_name,
          name_initial,
          display_name,
          gender_id,
          date_of_birth,
          email,
          mobile_no,
          designation,
          emp_type,
          join_date,
          experience,
          salary,
          personal_notes,
        ],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  // to get all employess
  getAllEmployees: () => {
    return new Promise((resolve, reject) => {
      dbConn.query(
        `SELECT * FROM employees inner join employee_types on employees.emp_type = employee_types.emp_type_id`,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },

  // to get  employee by employee id
  getEmployeeById: (emp_id) => {
    return new Promise((resolve, reject) => {
      dbConn.query(
        `SELECT * FROM employees inner join employee_types on employees.emp_type = employee_types.emp_type_id where employees.emp_id =?`,
        [emp_id],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },

  // to get all employees by employee type
  getAllEmployeesByEmployeeType: (emp_type) => {
    return new Promise((resolve, reject) => {
      dbConn.query(
        `SELECT * FROM employees inner join employee_types on employees.emp_type = employee_types.emp_type_id where employees.emp_type=?`,
        [emp_type],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },

  // to delete employee by employee id
  deleteEmployee: (emp_id) => {
    return new Promise((resolve, reject) => {
      dbConn.query(
        `DELETE FROM employees WHERE emp_id =?`,
        [emp_id],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },

  // to update employee
  updateEmployee: (emp_id, employee) => {
    let {
      full_name,
      name_initial,
      display_name,
      gender_id,
      date_of_birth,
      email,
      mobile_no,
      designation,
      emp_type,
      join_date,
      experience,
      salary,
      personal_notes,
    } = employee;
    // console.log(emp_id, full_name);
    return new Promise((resolve, reject) => {
      console.log(full_name);
      dbConn.query(
        `UPDATE employees SET employees.full_name=?,employees.name_initial=?,employees.display_name=?,employees.gender_id=?,
        employees.date_of_birth=?,employees.email=?,employees.mobile_no=?,employees.designation=?,
        employees.emp_type=?,employees.join_date=?,employees.experience=?,employees.salary=?,employees.personal_notes=? 
        WHERE employees.emp_id=?;
        `,
        [
          full_name,
          name_initial,
          display_name,
          gender_id,
          date_of_birth,
          email,
          mobile_no,
          designation,
          emp_type,
          join_date,
          experience,
          salary,
          personal_notes,
          emp_id,
        ],
        (err, result) => {
          if (err) {
            console.log("error :", err);
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
};

/*`UPDATE employees SET employees.full_name=?,employees.name_initial=?,employees.display_name=?,employees.gender_id=?,employees.date_of_birth=?,employees.email=?,
        employees.mobile_no=?,employees.designation=?,employees.emp_type=?,employees.join_date=?,employees.experience=?,employees.salary=?,employees.personal_notes=? 
        WHERE employees.emp_id=?`*/
