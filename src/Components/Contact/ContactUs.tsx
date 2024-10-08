import React from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-title">Contact Us</div>
        <div className="contact-icons">
          <img className="contact-icon" src="https://via.placeholder.com/41x41" alt="icon1" />
          <div className="contact-icon" style={{ left: '81.42px' }}>
            <img src="https://via.placeholder.com/41x41" alt="icon2" />
            <div style={{ width: '40.92px', height: '40.92px', color: '#006699' }} />
          </div>
          <img className="contact-icon" style={{ left: '162px' }} src="https://via.placeholder.com/41x41" alt="icon3" />
          <img className="contact-icon" style={{ left: '243px' }} src="https://via.placeholder.com/41x41" alt="icon4" />
        </div>
        <div className="contact-info phone-info" style={{ left: '0px', top: '83px' }}>
          <img style={{ width: '72px', height: '72px' }} src="https://via.placeholder.com/72x72" alt="phone" />
          <div className="phone-number">071 234 5678</div>
        </div>
        <div className="contact-info email-info" style={{ left: '162px', top: '83px' }}>
          <img style={{ width: '71px', height: '70px' }} src="https://via.placeholder.com/71x70" alt="email" />
          <div className="email-address">example@example.com</div>
        </div>
        <div className="divider" style={{ left: '142px', top: '121px' }} />
      </div>
    </div>
  );
};

export default ContactUs;
