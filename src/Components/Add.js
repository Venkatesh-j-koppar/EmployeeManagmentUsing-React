import React, { useState } from "react";

function Add(props) {
  const [emp, setEmpObject] = useState({
    name: "",
    designation: "",
  });

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setEmpObject({ ...emp, [name]: value });
  };

  return (
    <div>
      <form onSubmit={(e) => props.AddEmployee(e, emp)}>
        <label htmlFor="name">Enter Employee Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          onChange={(e) => changeHandler(e)}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="designation">Enter Employee Designation</label>
        <input
          type="text"
          id="designation"
          name="designation"
          placeholder="Designation"
          onChange={(e) => changeHandler(e)}
        ></input>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" className="submitbutton" />
      </form>
    </div>
  );
}

export default Add;
