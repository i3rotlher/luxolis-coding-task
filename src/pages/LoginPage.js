import React from 'react';
import { useState } from 'react';
import LoginBackground from '../LoginBackground.svg';
import LoginCart from '../loginCart.svg';
import LoginUser from '../user.svg';
import LoginLock from '../lock.svg';
import Modal from 'react-modal';


const dummyTestAccount = {
  username: 'test@luxpmsoft.com',
  password: 'test1234!'
}

const LoginPage = () => {
  const [wrongPasswordCombination, setWrongPasswordCombination] = useState(false);
  const [wrongPasswordModal, setWrongPasswordModal] = useState(false);

  const showWrongPasswordModal = () => {
    setWrongPasswordModal(true);
  }

  const closeWrongPasswordModal = () => {
    setWrongPasswordModal(false);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    // Login would happen here with api calls instead of dummy test
    if (username === dummyTestAccount.username && password === dummyTestAccount.password) {
      // weiterleiten
    } else {
      showWrongPasswordModal();
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

      <Modal
        isOpen={wrongPasswordModal}
        onRequestClose={closeWrongPasswordModal}
        contentLabel="Wrong Password Modal"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            backdropFilter: 'blur(1px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',


          },
          content: {
            border: 'none',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            inset: 'unset',
            width: 'fit-content',
            height: 'fit-content',
            backgroundColor: '#f64848'
          }
        }}
      >
        <div className='wrongPasswordModal'>
          <h2>Wrong username or password!</h2>
          <span className="modalOK" onClick={closeWrongPasswordModal}>OK</span>
        </div>
      </Modal>

      <div className='centerContainer'>

        <div className="loginForm">

          <form className="loginForm" onSubmit={handleLogin}>
            <img id="loginCart" src={LoginCart} alt=""></img>

            <label className="loginInputField">
              <img className="inputIcon" src={LoginUser} alt="" />
              <input placeholder='USERNAME' name="username" required></input>
            </label>

            <div className='inputFieldWithMessage'>
              <label className="loginInputFieldPassword">
                <img className="inputIcon" src={LoginLock} alt="" />
                <input type='password' placeholder='PASSWORD' name="password" required onChange={checkPasswordCombination}></input>
              </label>
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
