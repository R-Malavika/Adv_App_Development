import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    allowExtraEmails: false,
  });

  const [formErrors, setFormErrors] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          name: value.trim() ? '' : 'First Name is required',
        }));
        break;

      
      case 'password':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          password: value.length >= 6 ? '' : 'Password must be at least 6 characters',
        }));
        break;

      case 'confirmPassword':
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: value === formData.password ? '' : 'Passwords do not match',
        }));
        break;

      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));

    validateField(name, fieldValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newFormErrors = {};

    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName, formData[fieldName]);
      newFormErrors[fieldName] = formErrors[fieldName];
    });

    setFormErrors(newFormErrors);

    
console.log("Hi");
    try {
      
        console.log('Hi');
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
        console.log('Form submitted successfully:', response.data);
        navigate('/');
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className='signn'>
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#00897b' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    autoFocus
                    value={formData.name}
                    onChange={handleInputChange}
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                    InputProps={{
                      style: { borderColor: 'green' }, // Set the border color to green
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                    InputProps={{
                      style: { borderColor: 'green' }, // Set the border color to green
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                    InputProps={{
                      style: { borderColor: 'green' }, // Set the border color to green
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={!!formErrors.confirmPassword}
            helperText={formErrors.confirmPassword}
            InputProps={{
              style: { borderColor: 'green' },
            }}
          />
        </Grid>

                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    id="role"
                    label="Role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    InputProps={{
                      style: { borderColor: 'green' }, // Set the border color to green
                    }}
                  >
                    <MenuItem value="user">User</MenuItem>
                    
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2, bgcolor: '#00897b' , '&:hover': { bgcolor: '#01e88f' }}}
                disabled={Object.values(formErrors).some((error) => error !== '')}

>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default SignUp;





// import React, { useState } from 'react';
// import axiosInstance from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import './signup.css';

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     // Basic validation for form fields
//     if (!fullName || !email || !password || !confirmPassword) {
//       setErrorMessage('Please fill in all fields.');
//       return;
//     }

//     // Check if password and confirm password match
//     if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
//       setErrorMessage('Password and Confirm Password must match.');
//       return;
//     }
    

//     // Mock validation for email format (replace with actual validation logic)
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     try {
//       // Make a POST request to your backend for user registration using axiosInstance
//       const response = await axiosInstance.post(
//         'http://localhost:8080/api/v1/auth/register',  // Replace with your actual backend API endpoint
//         {
//           name: fullName,
//           email: email,
//           password: password,
//         }
//       );

//       // Check the registration response from the backend
//       if (response.data.success) {
//         console.log('User registered successfully:', response.data);
//         setErrorMessage(''); // Clear error message on successful registration
//         // Redirect to home page or any other page after successful registration
//         navigate('/');
//       } else {
//         // If registration is unsuccessful, display an error message from the backend
//         setErrorMessage(response.data.message || 'Registration failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Registration failed:', error);
//       setErrorMessage('Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <div className='bodylog'>
//       <section className='sectionlog'>
//         <div className="content">
//           <div className="left">
//             <img src="https://www.shutterstock.com/image-vector/financial-investments-money-savings-concept-600nw-2042511212.jpg" alt="icon" />
//             <h1 style={{ textAlign: 'center' }}>AgroFinance<br/>App</h1>
//           </div>

//           <div className="right">
//             <div className="title">
//               <h2>Sign Up</h2>
//             </div>

//             <div className="form">
//               <form onSubmit={handleSignUp}>
//                 <div className="inputbox">
//                   <label>Full Name</label>
//                   <input
//                     className='inputlog'
//                     type="text"
//                     placeholder="Enter your Name"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     required
//                   />
//                 </div>
                
//                 <div className="inputbox">
//                   <label>Email</label>
//                   <input
//                     className='inputlog'
//                     type="email"
//                     placeholder="Enter your Email ID"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="inputbox">
//                   <label>Password</label>
//                   <input
//                     className='inputlog'
//                     type="password"
//                     placeholder="Enter your Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="inputbox">
//                   <label>Confirm Password</label>
//                   <input
//                     className='inputlog'
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                   />
//                 </div>

//                 {errorMessage && (
//                   <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
//                     {errorMessage}
//                   </div>
//                 )}
//                 <br/>
//                 <div className="create">
//                   <button type="submit">Create Account</button>
//                 </div>

//                 <div className="additional">
//                   <Link to="/"><p>Already have an account? Log In</p></Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SignUp;
