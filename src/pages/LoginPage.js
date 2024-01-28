import React from 'react';
import LoginBackground from '../LoginBackground.svg';
import LoginCart from '../loginCart.svg';
import LoginUser from '../user.svg';
import LoginLock from '../lock.svg';

const LoginPage = () => {
  return (
    <div class="loginPage">
      <div class="background loginPageBackground">
        <img src={LoginBackground} alt="" />
      </div>
      <div class='centerContainer'>

        <div class="loginForm">
          <form class="loginForm">
            <img id="loginCart" src={LoginCart} alt=""></img>
            <label class="loginInputField">
              <img class="inputIcon" src={LoginUser} alt="" />
              <input placeholder='USERNAME'></input>
            </label>
            <label class="loginInputField">
              <img class="inputIcon" src={LoginLock} alt="" />
              <input placeholder='PASSWORD'></input>
            </label>
            <button class="loginButton">LOGIN</button>
          </form>
          <a href="/" id="forgotPassword">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
