import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../../App";
import "./users.css";

export default function Users() {
  var loginStatus = useContext(loginContext);
  var [users, setUsers] = useState([]);
  var [filteredArray, setArray] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      console.log(res.data.data);
      setArray(res.data.data);
      setUsers(res.data.data);
    });
  }, []);
  const findUser = (e) => {
    //filter users array against the input
    var input_name = e.target.value;
    if (input_name === "") {
      setArray(users);
    } else {
      setArray(
        filteredArray.filter((elem) => {
          return elem.first_name.includes(input_name);
        })
      );
    }
  };
  if (filteredArray.length !== 0) {
    return (
      <div>
        <h1>List of Users</h1>
        <h2>
          Create a search box and on typing username into it, user with that
          name only should be displayed
        </h2>

        <div className="user-container">
          Search users: <input type="text" onChange={findUser}></input>
          {filteredArray.map((elem) => {
            return (
              <div className="user">
                <div className="user-avatar">
                  <img src={elem.avatar}></img>
                </div>
                <div className="user-fname">
                  {elem.first_name} {elem.last_name}
                </div>
                <div className="user-email">{elem.email}</div>
              </div>
            );
          })}
        </div>
        <div>{loginStatus}</div>
      </div>
    );
  } else if (filteredArray.length == 0) {
    return (
      <div>
        <h1>List of Users</h1>
        <h2>
          Create a search box and on typing username into it, user with that
          name only should be displayed
        </h2>

        <div className="user-container">
          Search users: <input type="text" onChange={findUser}></input>
          <div>User not found</div>
        </div>
        <div>{loginStatus}</div>
      </div>
    );
  } else {
    return <div>No match found</div>;
  }
}
