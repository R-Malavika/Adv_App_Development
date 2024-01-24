import React from 'react';
import './loginpg.css';
const Login = () => {
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
            <label>Email</label>
            <input type="email" placeholder="Enter your Email ID" required />
          </div>
              <br/>
              <div className="inputbox">
                <label>Password</label>
                <input type="password" placeholder="Enter your Password" required />
              </div>
              <br/><br/>
              <div className="create">
             <button> <a href="/home" style={{"textDecoration":"none","color":"white"}}>Login</a></button>
              </div>
              <br/>
              <div className="additional">
                <a href="/signup"><p>Don't have an account ? <span>Sign Up</span></p></a>
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
