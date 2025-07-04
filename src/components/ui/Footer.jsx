import React from "react";
import "../../Styles/Footer.css"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="brand-name">ETS Global</h2>
        <p className="slogan">Simplifying Technology, Amplifying Impact</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ETS Global. All rights reserved.</p>
        {/* <p>
          Made with <span role="img" aria-label="love">❤️</span> by{" "}
          <a href="" target="_blank" rel="noopener noreferrer">Technologist  James</a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
