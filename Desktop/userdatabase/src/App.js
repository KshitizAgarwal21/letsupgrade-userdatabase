import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUsers from "./Components/AddUsers/AddUsers";
import Context from "./Components/Context/Context";
import Header from "./Components/Header/Header";
import Sidenav from "./Components/Sidenav/Sidenav";
import Users from "./Components/Users/Users";
export var loginContext = createContext();
function App() {
  const [loginStatus, updateLogin] = useState("logged in");
  return (
    <div>
      <loginContext.Provider value={loginStatus}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Sidenav />
            <div className="content">
              <Routes>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/add" element={<AddUsers />}></Route>
                <Route path="/context" element={<Context />}></Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </loginContext.Provider>
    </div>
  );
}

export default App;
