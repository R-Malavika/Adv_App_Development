import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const defaultTheme = createTheme();

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const validateEmail = () => {
    const { email } = formData;
    if (!email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
      return false;
    }

    setFormErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    return true;
  };

  const validatePassword = () => {
    const { password } = formData;
    if (!password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      return false;
    }

    if (password.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters',
      }));
      return false;
    }

    setFormErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      // Add other headers if needed
    },
    validateStatus: (status) => status < 500, // Resolve only if the status code is less than 500
  });
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
  
    if (isEmailValid && isPasswordValid) {
      try {
        const response = await axiosInstance.post(
          'http://localhost:8080/api/v1/auth/login',
          formData
        );
        
        const token = response.data.token;
        localStorage.setItem('token', token);
        const { email, password } = formData;
        if (email === 'admin@gmail.com' && password=== 'Admin@123') {
          navigate('/adminHome');
        } else if (response.data.role === 'ADMIN') { 
          navigate('/adminHome');
        } else {
          navigate('/home');
        }
        console.log('Login successful:', response.data);
        sessionStorage.setItem('isLoggedIn', 'true');
        // Navigate to the profile page or any other page you want to redirect to
        localStorage.setItem('email', email);
      
      } catch (error) {
        console.error('Error during login:', error);
        // Handle login error, show an error message, etc.
      }
    }
  };
  
  


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/premium-vector/business-people-growing-planting-watering-money-tree-illustration-business-finance-investment-growth-prosperity-concept_269730-23.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#00897b' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleInputChange}
                onBlur={validateEmail}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={validatePassword}
                error={!!formErrors.password}
                helperText={formErrors.password}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,bgcolor: '#00897b', '&:hover': { bgcolor: '#01e88f' }}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;



// import React, { useState } from 'react';
// import axiosInstance from 'axios'; 
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Basic validation for email and password presence
//     if (!email || !password) {
//       setErrorMessage('Please fill in all fields.');
//       return;
//     }
//     console.log("hi");

//     try {
//       console.log("hi");
//       // Make a POST request to your backend for authentication
//       const response = await axiosInstance.post(
//         'http://localhost:8080/api/v1/auth/login',
//         {
//           email: email,
//           password: password,
//         }
//       );

//       // Check the authentication response from the backend
//       if (response.data.success) {
//         const token = response.data.token;
//         console.log(token);
//         localStorage.setItem('token', token);

//         if (email === 'admin@gmail.com' && password === 'Admin@123') {
//           navigate('/adminHome');
//         } else if (response.data.role === 'ADMIN') {
//           navigate('/adminHome');
//         } else {
//           navigate('/home');
//         }

//         console.log('Login successful:', response.data);
//         sessionStorage.setItem('isLoggedIn', 'true');
//       } else {
//         // If login is unsuccessful, display an error message from the backend
//         setErrorMessage(response.data.message || 'Incorrect email or password. Please try again.');
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       setErrorMessage('Something went wrong. Please try again later.');
//     }
//   };
  

//   return (
//     <div className='bodylog'>
//     <section className='sectionlog'>
//       <div className="content">
//         <div className="left">
//           <img src="https://www.shutterstock.com/image-vector/financial-investments-money-savings-concept-600nw-2042511212.jpg" alt="icon" />
//           <h1 style={{ textAlign: 'center' }}>AgroFinance<br/>App</h1>
//         </div>

//         <div className="right">
//           <div className="title">
//             <h2>Welcome</h2>
//           </div>

//           <div className="form">
//             <form onSubmit={handleLogin}>
//               <div className="inputbox">
//                 <label>Email</label>
//                 <input
//                   className='inputlog'
//                   type="email"
//                   placeholder="Enter your Email ID"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <br/>
//               <div className="inputbox">
//                 <label>Password</label>
//                 <input
//                   className='inputlog'
//                   type="password"
//                   placeholder="Enter your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <br/>
//               {/* Display the error message in red above the password input box */}
//               {errorMessage && (
//                 <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
//                   {errorMessage}
//                 </div>
//               )}

//               <div className="create">
//                 <button className='buttonlog' type="submit">Login</button>
//               </div>
//               <br/>
//               <div className="additional">
//                 <Link to="/signup"><p>Don't have an account? Sign Up</p></Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
      
//     </section>
//     </div>
//   );
// };

// export default Login;
