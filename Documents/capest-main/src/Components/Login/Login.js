import React from 'react';
import "./login.css";
import food from '../../../src/food.jpg';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Signup from '../Signup/Signup';
import RestaurantSignup from '../RestaurantSignup/RestaurantSignup';
export default function Login() {
    const [formData, setformData] = useState({});
    const [signData, setsignData] = useState({});
    const [restData, setrestData] = useState({});
    const handleChange = (e)=>{
      setformData((prev)=>({
        ...prev, [e.target.name]:e.target.value,
      }))
    };
  const navigate = useNavigate();
  
  const openSignup = async () =>{
    const resp = await axios.post("http://localhost:8080/signup", signData);
  
    if(resp.data.status==200)
    {
      console.log("signedin successfully");
      localStorage.setItem("token", resp.data.token);
    }
        // navigate('/Signup');
  };
  const restSignup = async () =>{
    const resp = await axios.post("http://localhost:8080/restsignup", restData);
  
    if(resp.data.status==200)
    {
      console.log("loggedin successfully");
      localStorage.setItem("token", resp.data.token);
    }
    // navigate('/RestaurantSignup');
  }
    const signin = async ()=>{
      // console.log(formData);
      const resp = await axios.post("http://localhost:8080/login", formData);
  
      if(resp.data.status==200)
      {
        console.log("loggedin successfully");
        localStorage.setItem("token", resp.data.token);
      }
    };
  return (
    <div>
        <div className='main-container'>
      <div className='mobile-carousel'>
         <img src={food}/>
      </div>
      <div className='login-container'>
        <h2>Restaurant login</h2>
      <div className='login-details'>
        {/* <img src={instapic}/> */}
        <div className='input-container'>
          <input type='text' placeholder='username'
          name='username'
          onChange={handleChange}
          ></input>
          <br/>
          <input type='text' placeholder='Password'
          name='password'
          onChange={handleChange}
          ></input>
          <button className='login' onClick={signin}>Log in</button>
          <div className='breaker'>
          <hr className='smallhr'></hr><span style={{verticalAlign:"top", opacity:"0.5", fontWeight:"bold"}}>OR</span><hr className='smallhr'></hr>
          </div>
          <p className='tplogin'>Log in with Facebook</p>
          <p className='smallfont'>Forgot Password?</p>
        </div>
        
      </div>
      <div className='action-signup'>
        <p>Dont have an account? 
          <span style={{color:"dodgerblue", fontWeight:"bold"}}>
            <button className='signup' onClick={restSignup}>Signup</button></span></p>
      </div>
      <div className='action-app'>
        {/* <p>Get the App.</p> */}
        <div className='app-banner'>
          {/* <img src={playstore}/> */}
        </div>
      </div>
      

      </div>
      <div className='login-container'>
        <h2>Customer login</h2>
      <div className='login-details'>
        {/* <img src={instapic}/> */}
        <div className='input-container'>
          <input type='text' placeholder='username'
          name='username'
          onChange={handleChange}
          ></input>
          <br/>
          <input type='text' placeholder='Email'
          name='email'
          onChange={handleChange}
          ></input>
          <br/>
          <input type='text' placeholder='Password'
          name='password'
          onChange={handleChange}
          ></input>
          <br/>
          <input type='number' placeholder='Mobile-number'
          name='password'
          onChange={handleChange}
          ></input>
          <button className='login' onClick={signin}>Log in</button>
          <div className='breaker'>
          <hr className='smallhr'></hr><span style={{verticalAlign:"top", opacity:"0.5", fontWeight:"bold"}}>OR</span><hr className='smallhr'></hr>
          </div>
          <p className='tplogin'>Log in with Facebook</p>
          <p className='smallfont'>Forgot Password?</p>
        </div>
        
      </div>
      <div className='action-signup'>
        <p>Dont have an account? 
          <span style={{color:"dodgerblue", fontWeight:"bold"}}>
            <button className='signup' onClick={openSignup}>Signup</button></span></p>
      </div>
      <div className='action-app'>
        {/* <p>Get the App.</p> */}
        <div className='app-banner'>
          {/* <img src={playstore}/> */}
        </div>
      </div>
      

      </div>
      </div>


    </div>
  )
}
