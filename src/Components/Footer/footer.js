

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          
          <p>
          Donating blood or platelets can be intimidating and even scary. Time to put those hesitations and fears aside. Learn from Blood Buddy 
          and platelet donors how simple and easy it is to roll up a sleeve and help save lives.
          </p>
        </div>
        <div className="footer-section">
          
          <p>
            Address: 123 ABC Street, City, State, Country
            <br />
            Phone: +1 234 5678 910
            <br />
            Email: info@bloodbank.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>&copy; 2023 Blood Bank Management. All rights reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
