import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic validation for form fields
    if (!fullName || !email || !mobileNo || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Mock validation for email format (replace with actual validation logic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Mock validation for mobile number format (replace with actual validation logic)
    const mobileNoRegex = /^\d{10}$/;
    if (!mobileNoRegex.test(mobileNo)) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Mock validation for password (replace with actual validation logic)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must have at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.'
      );
      return;
    }

    // Mock registration logic (replace with actual registration logic)
    console.log('User registered successfully!');
    setErrorMessage(''); // Clear error message on successful registration

    // Redirect to home page after successful registration
    navigate('/');
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
              <h2>Sign Up</h2>
            </div>

            <div className="form">
              <form onSubmit={handleSignUp}>
                <div className="inputbox">
                  <label>Full Name</label>
                  <input className='inputlog'
                    type="text"
                    placeholder="Enter your Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="inputbox">
                  <label>Email</label>
                  <input className='inputlog'
                    type="email"
                    placeholder="Enter your Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="inputbox">
                  <label>Mobile No</label>
                  <input className='inputlog'
                    type="tel"
                    placeholder="Enter your Number"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    required
                  />
                </div>

                <div className="inputbox">
                  <label>Password</label>
                  <input className='inputlog'
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Display the error message in red above the submit button */}
                {errorMessage && (
                  <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                    {errorMessage}
                  </div>
                )}
<br/>
                <div className="create">
                  <button type="submit">Create Account</button>
                </div>

                <div className="additional">
                  <Link to="/"><p>Already have an account? Log In</p></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
