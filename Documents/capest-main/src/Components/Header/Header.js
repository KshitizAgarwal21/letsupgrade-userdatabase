import React from 'react'
import "./header.css";
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import {NavLink} from "react-router-dom";
export default function Header() {
  return (
    <div>     
       <header>
        <div className='header-content'>
        <NavLink className="navlink" to="/foodlist"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "red" : "black",
                }
              }}>
                {" "}
              <li>
                  {/* <AppsOutlinedIcon /> */}
                  <span className='menu-item'>Food List</span>
                </li>
              </NavLink>
              <NavLink className="navlink" to="/stock"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "red" : "black",
                }
              }}>
                <li>
                {/* <AppsOutlinedIcon /> */}
                <span className='menu-item' >Stock</span>
                </li>
                </NavLink>
                
        </div>
      </header>
    </div>
  )
}
