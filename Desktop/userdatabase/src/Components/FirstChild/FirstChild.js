import React, { useContext } from "react";
import { userContext } from "../Context/Context";
import Grandchild from "../GrandChild/Grandchild";
import "./child.css";
export default function FirstChild() {
  return (
    <div>
      <div className="child">
        First Child
        <Grandchild />
      </div>
    </div>
  );
}
