import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUsers from "./Components/AddUsers/AddUsers";
import Header from "./Components/Header/Header";
import Sidenav from "./Components/Sidenav/Sidenav";
import Users from "./Components/Users/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Sidenav />
          <div className="content">
            <Routes>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/add" element={<AddUsers />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
