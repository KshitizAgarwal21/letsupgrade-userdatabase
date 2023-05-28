import React from 'react'

export default function RestaurantSignup() {
  return (
    
        <div className="form">
          <div className="form-body">
            <h2>Restaurant Sign up</h2>
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="mobilenr">
                  <label className="form__label" for="mobile-number">Mobile Nr </label>
                  <input  type="number" name="" id="mobile"  className="form__input"placeholder="Mobile"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      
    </div>
  )
}
