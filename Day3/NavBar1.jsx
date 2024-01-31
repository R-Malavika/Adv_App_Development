import React, { useEffect } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <header>
      <div className="responsive-bar">
        <div className="logo">
        <Link to="/home"><img src="https://www.shutterstock.com/image-vector/financial-investments-money-savings-concept-600nw-2042511212.jpg" alt="logo" /></Link>
        </div>
        <div className="menu">
          <h4></h4>
        </div>
      </div>
      <nav className='navb'>
        <div className="logo">
        <Link to="/adminhome"><img src="https://www.shutterstock.com/image-vector/financial-investments-money-savings-concept-600nw-2042511212.jpg" alt="logo" /></Link>
        </div>
        <ul>
        <li><a href="/adminHome">Dashboard</a></li>
          <li><a href="/loanStatus">Loan Status</a></li>
          <li><a href="/schemes">Scheme Details</a></li>
          <li><a href="/adminProfile">Profile</a></li>
        </ul>
        
        <Link to='/'>  
        <button className='logb' style={{"color":"white"}}>Logout</button>
        </Link>
        
      </nav>
</header>
  );
};

export default Navbar;
