import React, { useState } from "react";

function Edit(props) {
  const [empdetails, setEmpDetails] = useState({
    name: "",
    designation: "",
    id: "",
  });

  const handleUserChange = (e) => {
    let { name, value } = e.target;
    setEmpDetails({ ...empdetails, [name]: value });
  };

  const findEmployee = (id) => {
    const found = props.employeeList.find((emp) => emp.id == id);
    setEmpDetails(found);
  };

  return (
    <div>
      <form onSubmit={(e) => props.EditEmployee(e, empdetails)}>
        <select
          onChange={(e) => {
            findEmployee(e.target.value);
          }}
        >
          <option>Select</option>
          {props.employeeList.map((emp) => {
            return <option value={emp.id}>{emp.id}</option>;
          })}
        </select>
        <br></br>
        <label htmlFor="name">Employee Name</label>
        <input
          value={empdetails.name}
          placeholder="Name"
          id="name"
          name="name"
          onChange={(e) => handleUserChange(e)}
        ></input>
        <br></br>

        <label htmlFor="desgination">Employee Designation</label>
        <input
          value={empdetails.designation}
          placeholder="Designation"
          id="desgination"
          name="designation"
          onChange={(e) => handleUserChange(e)}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Edit;
