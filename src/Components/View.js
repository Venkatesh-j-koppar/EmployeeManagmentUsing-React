import React, { useEffect, useState } from "react";
import axios from "axios";

function View(props) {
  useEffect(() => {
    axios.get("http://localhost:4000/employees").then((res) => {
      props.setEmployeeList(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Emp Number</th>
          </tr>
        </thead>
        <tbody>
          {props.employeeList.map((emp) => {
            return (
              <tr>
                <td>{emp.name}</td>
                <td>{emp.designation}</td>
                <td>{emp.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default View;
