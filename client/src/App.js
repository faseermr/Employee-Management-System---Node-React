import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/employee/EmployeeList";
import AddEmployeeForm from "./components/employee/AddEmployeeForm";
import UpdateEmployeeForm from "./components/employee/UpdateEmployeeForm";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<EmployeeList />} />
          <Route path="/add-people" exact element={<AddEmployeeForm />} />
          <Route
            path="/update-people/:emp_id"
            exact
            element={<UpdateEmployeeForm />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
