const {
  createNewEmployee,
  getAllEmployees,
  getAllEmployeesByEmployeeType,
  deleteEmployee,
  updateEmployee,
} = require("../model/employee.model");

module.exports = {
  // To add new employee
  createNewEmployee: async (req, res) => {
    let employee = {
      full_name: req.body.full_name,
      name_initial: req.body.name_initial,
      display_name: req.body.display_name,
      gender_id: req.body.gender_id,
      date_of_birth: req.body.date_of_birth,
      email: req.body.email,
      mobile_no: req.body.mobile_no,
      designation: req.body.designation,
      emp_type: req.body.emp_type,
      join_date: req.body.join_date,
      experience: req.body.experience,
      salary: req.body.salary,
      personal_notes: req.body.personal_notes,
    };
    try {
      const response = await createNewEmployee(employee);
      res
        .status(200)
        .json({ message: "Employee successfully added", response });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // to get all employess
  getAllEmployees: async (req, res) => {
    try {
      const response = await getAllEmployees();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // to get all employees by employee type
  getAllEmployeesByEmployeeType: async (req, res) => {
    try {
      const response = await getAllEmployeesByEmployeeType(req.params.emp_type);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // to delete employee by employee id
  deleteEmployee: async (req, res) => {
    let { emp_id } = req.params;
    try {
      const response = await deleteEmployee(emp_id);
      res.status(200).json({ message: "Employee successfully deleted" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // to update employee
  updateEmployee: async (req, res) => {
    let { emp_id } = req.params;
    let employee = {
      full_name: req.body.full_name,
      name_initial: req.body.name_initial,
      display_name: req.body.display_name,
      gender_id: req.body.gender_id,
      date_of_birth: req.body.date_of_birth,
      email: req.body.email,
      mobile_no: req.body.mobile_no,
      designation: req.body.designation,
      emp_type: req.body.emp_type,
      join_date: req.body.join_date,
      experience: req.body.experience,
      salary: req.body.salary,
      personal_notes: req.body.personal_notes,
    };
    try {
      console.log(emp_id, employee.full_name);
      const response = await updateEmployee(emp_id, employee);
      res.status(200).json({ message: "Employee successfully updated" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
