import React from "react";

function Delete(props) {
  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Emp Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.employeeList.map((emp) => {
            return (
              <tr>
                <td>{emp.name}</td>
                <td>{emp.designation}</td>
                <td>{emp.id}</td>
                <td>
                  <button
                    className="deletebutton"
                    onClick={() => {
                      props.DeleteEmployee(emp.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Delete;
