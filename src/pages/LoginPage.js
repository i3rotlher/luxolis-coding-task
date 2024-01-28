import React from 'react';
import { useState } from 'react';
import LoginBackground from '../LoginBackground.svg';
import LoginCart from '../loginCart.svg';
import LoginUser from '../user.svg';
import LoginLock from '../lock.svg';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';


const dummyTestAccount = {
  username: 'test@luxpmsoft.com',
  password: 'test1234!'
}

const LoginPage = () => {
  const [wrongPasswordCombination, setWrongPasswordCombination] = useState(false);
  const navigate = useNavigate();
  const showWrongPasswordMessage = () => toast.error('The provided password is wrong', {
    style: {
      padding: '16px',
      fontWeight: '600',
      color: '#f64848',
    },
    iconTheme: {
      primary: '#f64848',
      secondary: '#FFFAEE',
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    // Login would happen here with api calls instead of dummy test and set login credentials
    if (username === dummyTestAccount.username && password === dummyTestAccount.password) {
      navigate('/pageAfterLogin')
    } else {
      showWrongPasswordMessage();
    }
  };

  const checkPasswordCombination = (e) => {
    const passwordCombinationCheck = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).+$/;
    if (e.target.value.length > 0 && !passwordCombinationCheck.test(e.target.value)) {
      setWrongPasswordCombination(true);
    } else {
      setWrongPasswordCombination(false);
    }
  }

  return (
    <div className="loginPage">
      <div className="background loginPageBackground">
        <img src={LoginBackground} alt="" />
      </div>
      <Toaster />
      <div className='centerContainer'>

        <div className="loginForm">

          <form className="loginForm" onSubmit={handleLogin}>
            <img id="loginCart" src={LoginCart} alt=""></img>

            <label className="loginInputField">
              <img className="inputIcon" src={LoginUser} alt="" />
              <input placeholder='USERNAME' name="username" required></input>
            </label>

            <label className="loginInputField">
              <img className="inputIcon" src={LoginLock} alt="" />
              <input type='password' placeholder='PASSWORD' name="password" required onChange={checkPasswordCombination}></input>
            </label>

            <div className='inputFieldWithMessage'>
              {wrongPasswordCombination && <span id="wrongPasswordCombination">Wrong combination</span>}
            </div>

            <button type='submit' className="loginButton" disabled={wrongPasswordCombination}>LOGIN</button>
          </form>

          <a href="/" id="forgotPassword">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
