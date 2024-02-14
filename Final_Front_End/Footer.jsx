import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          AgroFinance<span> App</span>
        </h3>
        <p className="footer-links">
          
        </p>
        <p className="footer-company-name">AgroFinance © 2024</p>
      </div>

      <div className="footer-center">
      <div className="icon-container">
      <FontAwesomeIcon icon={faMapMarker} size="2x" />
      <p>
        <span>Brooke Bond Road, Near Brookefields mall,</span> Coimbatore - 38.
      </p>
    </div><br/>
    <div className="icon-container">
      <FontAwesomeIcon icon={faPhone} size="2x" />
      <p>+91 9958874211</p>
    </div><br/>
    <div className="icon-container">
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
      <p>
             <a href="mailto:#">AgroFinance@company.com</a>
           </p>
    </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          AgroFinance App is revolutionizing the way farmers access financial support for their agricultural endeavors. Our platform has been tailored to meet the unique needs of the farming community, providing a seamless and efficient solution for obtaining agricultural loans.
          </p>
        <div className="footer-icons">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// <div>
//           <FontAwesomeIcon icon={faMapMarker} size="2x" />
//           <p>
//             <span>Brooke Bond Road, Near Brookefields</span> Coimbatore - 38.
//           </p>
//         </div><br/>
//         <div>
//           <FontAwesomeIcon icon={faPhone} size="2x" />
//           <p>+91 9958874211</p>
//         </div><br/>
//         <div>
//           <FontAwesomeIcon icon={faEnvelope} size="2x" />
//           <p>
//             <a href="mailto:#">AgroFinance@company.com</a>
//           </p>
//         </div>