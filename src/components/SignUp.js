import React, { useState } from 'react';
import '../cssfiles/signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';




const SignUp = () => {
    const navigate = useNavigate();
    
  const [signUpFormData, setSignUpFormData] = useState({
    userName: '',
    email: '',
    password: '',
    recaptchaChecked:false,
  });

  const [loginFormData, setLoginFormData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const handleInputChange = (event, formType) => {
    const { name, value } = event.target;

    if (formType === 'signup') {
      setSignUpFormData({
        ...signUpFormData,
        [name]: value,
      });
    } else if (formType === 'login') {
      setLoginFormData({
        ...loginFormData,
        [name]: value,
      });
    }
  };

  const handleSignUpSubmit =async (event) => {
    event.preventDefault();

    if (!signUpFormData.recaptchaChecked) {
      alert('Please confirm you are not a bot.');
      return;
    }

    if (!validateSignUpForm()) {

      console.log("prevented");
    } else {
    
      try {
        await axios.post('http://localhost:3001/api/signup', signUpFormData);
        console.log('User registered successfully');
        navigate('/');
      } catch (error) {
        console.error('Error registering user:', error);
      }


    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
  
    if (!validateLoginForm()) {
      return;
    }
  
    try {
        const response = await axios.post('http://localhost:3001/api/login', {
          email: loginFormData.loginEmail,
          password: loginFormData.loginPassword
        });
    
        let loginresponse=response.data;
          console.log(loginresponse);
        if (loginresponse.value) {
          console.log("successfully verified");
          navigate("/");

        }
        else{
          alert(loginresponse.error);
        }
   
      
    } catch (error) {
      console.error('Error logging in react :', error);
    }
  };

  const handleAlreadyHaveAccountClick = () => {
    let chk = document.querySelector("#chk");
    chk.checked = true;
  };

  const validateSignUpForm = () => {
    const { userName, email, password } = signUpFormData;

    if (userName === '' || email === '' || password === '') {
      alert('All fields must be filled out');
      return false;
    }

    if (!isPasswordValid(password)) {
      alert('Password must contain at least one symbol, one number, one capital letter, and be at least 8 characters long');
      return false;
    }

    return true;
  };

  const validateLoginForm = () => {
    const { loginEmail, loginPassword } = loginFormData;

    if (loginEmail === '' || loginPassword === '') {
      alert('All fields must be filled out');
      return false;
    }

    if (!isPasswordValid(loginPassword)) {
      alert('Password must contain at least one symbol, one number, one capital letter, and be at least 8 characters long');
      return false;
    }

    return true;
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*\d)(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRecaptchaChange = () => {
    setSignUpFormData({
      ...signUpFormData,
      recaptchaChecked: true,
    });
  };

  return (
    <div className="signupbody">
    <div className="signupmain">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form className='signupform' onSubmit={handleSignUpSubmit}>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input
            type="text"
            name="userName"
            placeholder="User name"
            value={signUpFormData.userName}
            onChange={(e) => handleInputChange(e, 'signup')}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signUpFormData.email}
            onChange={(e) => handleInputChange(e, 'signup')}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signUpFormData.password}
            onChange={(e) => handleInputChange(e, 'signup')}
            required
          />
          <ReCAPTCHA className='recaptcha' onChange={handleRecaptchaChange} sitekey="6LfJg4ApAAAAACm8T15x5axYpmFk7b0QG2M-xh9_" />
          <button type="submit">Sign up</button>
          <a onClick={handleAlreadyHaveAccountClick}>already have an account?</a>
        </form>
      </div>

      <div className="login">
        <form className='loginform' onSubmit={handleLoginSubmit}>
          <label htmlFor="chk" aria-hidden="true">Login</label> 
          <input
            type="email"
            name="loginEmail"
            placeholder="Email"
            value={loginFormData.loginEmail}
            onChange={(e) => handleInputChange(e, 'login')}
            required
          />
          <input
            type="password"
            name="loginPassword"
            placeholder="Password"
            value={loginFormData.loginPassword}
            onChange={(e) => handleInputChange(e, 'login')}
            required
          />
          <a href="$">Forgot password?</a>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;