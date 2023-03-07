import React from "react";

const UpdateEmployeeForm = () => {
  return (
    <div className="card">
      <div className="card-header p-3 fw-bold">Edit People</div>
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col">
              <label>Full Name*</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Name with initials*</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-6">
              <label>Prefered/ Display Name*</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Gender</label>
              <select className="form-select">
                <option selected disabled>
                  --Select One--
                </option>
                <option value={1}>Male</option>
                <option value={2}>Female</option>
              </select>
            </div>
            <div className="col-6">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-6">
              <label>Mobile Number</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Designation</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-6">
              <label>Employment Type</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Joined Date</label>
              <input
                type="date"
                className="form-control"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="col-6">
              <label>Experience</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Salary</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Personal Notes</label>
              <textarea class="form-control" />
            </div>
          </div>
        </form>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-end">
          <button className="btn text-primary">Cancel</button>
          <button className="btn btn-primary ml-2">Update People</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeForm;
