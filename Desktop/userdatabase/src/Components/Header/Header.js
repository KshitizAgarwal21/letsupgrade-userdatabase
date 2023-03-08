import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <div>
      <header>
        <ul className="headerUl">
          <Link to="/home">
            <li className="headerLi">Home</li>
          </Link>
          <Link to="/users">
            <li className="headerLi">Users</li>
          </Link>
          <Link to="/add">
            <li className="headerLi">Add users</li>
          </Link>
          <Link to="/modify">
            <li className="headerLi">Modify users</li>
          </Link>
        </ul>
      </header>
    </div>
  );
}
