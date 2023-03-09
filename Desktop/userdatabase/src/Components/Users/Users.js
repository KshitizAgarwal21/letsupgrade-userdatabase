import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../../App";
import "./users.css";

export default function Users() {
  var loginStatus = useContext(loginContext);
  var [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      console.log(res.data.data);
      setUsers(res.data.data);
    });
  }, []);

  if (users.length !== 0) {
    return (
      <div>
        <h1>List of Users</h1>
        <div className="user-container">
          {users.map((elem) => {
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
  } else {
    return <div>Data loading now</div>;
  }
}
