import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation for email and password presence
    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Password validation rules
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must have at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.'
      );
      return;
    }

    // Mock authentication (replace with actual authentication logic)
    const isLoginSuccessful = true; // Set this based on your authentication logic

    if (isLoginSuccessful) {
      // If validation passes, navigate to the home page
      navigate('/home');
    } else {
      // If login is unsuccessful, display an error message
      setErrorMessage('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div className='bodylog'>
    <section className='sectionlog'>
      <div className="content">
        <div className="left">
          <img src="https://www.shutterstock.com/image-vector/financial-investments-money-savings-concept-600nw-2042511212.jpg" alt="icon" />
          <h1>Loanapp</h1>
        </div>

        <div className="right">
          <div className="title">
            <h2>Welcome</h2>
          </div>

          <div className="form">
            <form onSubmit={handleLogin}>
              <div className="inputbox">
                <label>Email</label>
                <input
                  className='inputlog'
                  type="email"
                  placeholder="Enter your Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <br/>
              <div className="inputbox">
                <label>Password</label>
                <input
                  className='inputlog'
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <br/>
              {/* Display the error message in red above the password input box */}
              {errorMessage && (
                <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                  {errorMessage}
                </div>
              )}

              <div className="create">
                <button className='buttonlog' type="submit">Login</button>
              </div>
              <br/>
              <div className="additional">
                <Link to="/signup"><p>Don't have an account? Sign Up</p></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  );
};

export default Login;
