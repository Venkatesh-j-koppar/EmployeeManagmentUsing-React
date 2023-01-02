import React from "react";

function Add() {
  return (
    <div>
      <form>
        <label htmlFor="name">Enter Employee Name</label>
        <input type="text" id="name" placeholder="Name"></input>
        <label htmlFor="designation">Enter Employee Designation</label>
        <input type="text" id="designation" placeholder="Designation"></input>
      </form>
    </div>
  );
}

export default Add;
