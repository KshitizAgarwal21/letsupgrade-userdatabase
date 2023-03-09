import React, { useContext } from "react";
import { loginContext } from "../../App";
import { userContext } from "../Context/Context";
import "./gchild.css";
export default function Grandchild() {
  var user = useContext(userContext);
  var loginStatus = useContext(loginContext);
  return (
    <div>
      <div className="grandchild">Grand Child data is {loginStatus}</div>
    </div>
  );
}
