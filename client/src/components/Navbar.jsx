import React from "react";

const Navbar = (props) => {
  return (
    <header>
      <div className="logo">D E P A W T U R E</div>
      <nav>
        <ul className="nav_links" >
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Bags</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </nav>
      <a className="contact" href="#"><button>Log in</button></a>
    </header>
  )
}

export default Navbar;