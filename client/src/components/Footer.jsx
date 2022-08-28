import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>
          Get To Know More About Depawture
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, temporibus! Odit aliquam quidem!
        </p>
        <ul className="socials">
          <li><i className="fa-brands fa-facebook"></i></li>
          <li><i className="fa-brands fa-twitter"></i></li>
          <li><i className="fa-brands fa-square-instagram"></i></li>
          <li><i className="fa-brands fa-google-plus"></i></li>
          <li><i className="fa-brands fa-youtube"></i></li>
          <li><i className="fa-brands fa-linkedin"></i></li>
        </ul>

        <div className="footer-bottom">
          <p className="design-by">Designed by <span>Ava</span> with love 💖</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer;