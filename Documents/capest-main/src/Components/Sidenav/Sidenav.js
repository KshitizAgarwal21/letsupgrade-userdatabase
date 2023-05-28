import React from 'react'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import {NavLink} from "react-router-dom";
export default function Sidenav() {
  return (
    <div className='side-nav'>
     
        <div className='display-picture'></div>
        <div className='name-container'></div>
        <div className='title'></div>
        
        <div className='food-links'>
            {/* <ul className='food-ul'>
              <NavLink className="navlink" to="/foodlist"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "red" : "black",
                }
              }}>
                {" "}
              <li>
                  <AppsOutlinedIcon /><span className='menu-item'>Food List</span>
                </li>
              </NavLink>
              <NavLink className="navlink" to="/stock"  style={({ isActive, isPending })=>{
                return {
                  
                  color: isActive ? "red" : "black",
                }
              }}>
                <li>
                <AppsOutlinedIcon /><span className='menu-item'>Stock</span>
                </li>
                </NavLink>
                
                               
            </ul> */}
        </div>
    </div>
  )
}