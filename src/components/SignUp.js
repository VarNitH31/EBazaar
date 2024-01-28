import React, { useState } from 'react';
import '../cssfiles/signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const SignUp = () => {
    const navigate = useNavigate();
    
  const [signUpFormData, setSignUpFormData] = useState({
    userName: '',
    email: '',
    password: '',
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

    if (!validateSignUpForm()) {
      // Prevent form submission if validation fails
      console.log("prevented");
    } else {
      // If validation succeeds, redirect or perform other actions
      try {
        await axios.post('http://localhost:3001/api/signup', signUpFormData);
        console.log('User registered successfully');
        navigate('/');
      } catch (error) {
        console.error('Error registering user:', error);
      }

      // navigate("/");

    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (!validateLoginForm()) {
      // Prevent form submission if validation fails
    } else {

      navigate("/");

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

    // Add more validation logic if needed

    return true;
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*\d)(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="signupbody">
    <div className="signupmain">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSignUpSubmit}>
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
          <button type="submit">Sign up</button>
          <a onClick={handleAlreadyHaveAccountClick}>already have an account?</a>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLoginSubmit}>
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
