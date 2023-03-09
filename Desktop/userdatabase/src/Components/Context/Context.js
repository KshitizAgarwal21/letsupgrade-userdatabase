import React, { createContext, useState } from "react";
import FirstChild from "../FirstChild/FirstChild";
import "./context.css";
export var userContext = createContext();
export default function Context() {
  const [user, setUser] = useState("Letsupgrade");

  return (
    <div>
      <userContext.Provider value={user}>
        <div className="parent">
          Parent
          <FirstChild />
        </div>
      </userContext.Provider>
    </div>
  );
}
