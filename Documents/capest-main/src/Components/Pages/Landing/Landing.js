import React from 'react';
import Sidenav from '../../Sidenav/Sidenav';
import Header from '../../Header/Header';
import FoodList from '../FoodList/FoodList';
import {Outlet} from 'react-router-dom';
import Signup from '../../Signup/Signup';
export default function Landing() {
  return (
    <div>
      <div className='landing-container'>
            <div className='sidenav'>
                {/* <Sidenav/> */}
            </div>
            <div className='content-container'>
                <Header/>
                {/* <FoodList/> */}
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </div>

    </div>
  )
}
