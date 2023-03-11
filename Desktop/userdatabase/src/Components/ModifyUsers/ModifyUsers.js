import React, { useState } from "react";
import "../AddUsers/addusers.css";
export default function ModifyUsers() {
  var [myclass, setClass] = useState();
  const check = (e) => {
    setClass(e.target.value);
  };
  return (
    <div className="usersForm">
      Input:
      <input type="text" onChange={check} />
      <div className={myclass}>See me change</div>
    </div>
  );
}
