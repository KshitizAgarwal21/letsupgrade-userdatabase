import axios from "axios";
import React, { useState } from "react";
import "./addusers.css";
export default function AddUsers() {
  var [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    console.log(formData);
  };
  const addUser = () => {
    axios.post("http://localhost:8080/adduser", formData).then((res) => {
      console.log(res.data.msg);
    });
  };
  return (
    <div>
      <div className="usersForm">
        <form>
          First Name:
          <input type="text" name="first_name" onChange={handleChange}></input>
          Last Name:
          <input type="text" name="last_name" onChange={handleChange}></input>
          Email:<input type="text" name="email" onChange={handleChange}></input>
        </form>
        <button className="submit" onClick={addUser}>
          Sumbit
        </button>
      </div>
    </div>
  );
}
