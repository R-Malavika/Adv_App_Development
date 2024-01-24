import React from 'react';
import './signuppg.css';
const SignUp = () => {
  return (
    <div className='bg'>
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
            <form>
              <div className="inputbox">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your Name" required />
              </div>
              <div className="inputbox">
                <label>Email</label>
                <input type="email" placeholder="Enter your Email ID" required />
              </div>
              <div className="inputbox">
                <label>Password</label>
                <input type="password" placeholder="Enter your Password" required />
              </div>
              <div className="create">
                <button type="submit"><a href="/" style={{"textDecoration":"none","color":"white"}}>Create Account</a></button>
              </div>
              <div className="additional">
              <a href="/"> <p>Already have an account ? <span>Log In</span></p></a>
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
