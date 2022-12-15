import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="Navbar">
        <div>
          <div className="Navs">
            <span>Product</span>
            <span>Key Features</span>
            <span>Why Wetrack</span>
            <span>Applications</span>
            <span>Careers</span>
            <span>Pricing</span>
          </div>
          <div className="Buttons">
            <button>Log In</button>
            <button>Try For Free</button>
          </div>
          
        </div>
      </div>
    );
};

export default Navbar;