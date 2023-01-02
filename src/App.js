import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import View from "./Components/View";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";
import Footer from "./Components/Footer";
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";
import "./Styles/componentStyles.css";
import axios from "axios";

function App() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/employees").then((res) => {
      setEmployeeList(res.data);
    });
  });

  const AddEmployee = (e, empObj) => {
    e.preventDefault();
    axios.post("http://localhost:4000/employees", empObj).then((res) => {
      setEmployeeList([...employeeList, res.data]);
    });
  };

  return (
    <div>
      <BrowserRouter>
        <nav className="navBarStyles">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view">View</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/edit">Edit</Link>
            </li>
            <li>
              <Link to="/delete">Delete</Link>
            </li>
            <Outlet></Outlet>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/view"
            element={
              <View
                employeeList={employeeList}
                setEmployeeList={setEmployeeList}
              />
            }
          ></Route>
          <Route
            path="/add"
            element={<Add AddEmployee={AddEmployee} />}
          ></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/delete" element={<Delete />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
export default App;
