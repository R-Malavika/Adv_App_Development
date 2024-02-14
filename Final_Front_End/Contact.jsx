// Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import Footer from './Footer';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const token = localStorage.getItem('token'); // Replace with your authentication logic
      const response = await axios.post(
        'http://localhost:8080/contacts/post',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Fix the syntax here
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response:', response);

      // Handle success or navigate to another page
    } catch (error) {
      console.error('Error:', error);

      // Handle error, show an alert, etc.
    }
  };

  return (
    <div>
    <Navbar/>
    <div className='conbody'>
      <section className="cosection">
        <div className="section-header">
          <div className="container">
          <br/><br/><br/><br/><br/>
          
          <h2>Contact Us</h2>

          <p style={{ lineHeight: 1.5 }}>
            We value your feedback and inquiries. Whether you have questions about AgroFinance App or need assistance, our dedicated team is here to help. Reach out to us through the contact information below, and we'll get back to you promptly.            
          </p>

          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-home"></i>
                </div>

                <div className="contact-info-content">
                  <h4>Address</h4>
                  <p>Brooke Bond Road,
                  <br/>Near Brookefields mall,<br/>Coimbatore - 38.</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-phone"></i>
                </div>

                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>+91 9958874211</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>

                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>AgroFinance@company.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
                <form onSubmit={handleSubmit} id="contact-form">
                  <h2>Send Message</h2>
                  <div className="input-box">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={formData.name ? '' : 'Full Name'}
                    />
                  </div>

                  <div className="input-box">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={formData.email ? '' : 'Email'}
                    />
                  </div>

                  <div className="input-box">
                    <textarea
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={formData.subject ? '' : 'Subject'}
                    ></textarea>
                  </div>

                  <div className="input-box">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={formData.message ? '' : 'Type your Message...'}
                    ></textarea>
                  </div>
                  <div className="input-box">
                    <input type="submit" value="Send" name="" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
