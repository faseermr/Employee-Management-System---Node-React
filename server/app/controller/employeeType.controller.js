const { getAllEmployeesTypes } = require("../model/employeeType.model");

module.exports = {
  getAllEmployeesTypes: async (req, res) => {
    try {
      const response = await getAllEmployeesTypes();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
