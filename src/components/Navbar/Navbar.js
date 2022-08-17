import React from 'react';
import "./Navbar.css";
import  matrixLogo from "../../images/matrixlogo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="matrixlogo">
                <img src={matrixLogo}></img>
            </div>
            <div className="matrixtitle">
                <div>MATRIX LABS</div>
            </div>
            <div className="navlinks">
                <div>Home</div>
                <div>About</div>
                <div>Whitepaper</div>
                <div>Audit</div>
                <div>Telegram</div>
            </div>
            <button className="connectbtn">
                <div className='connect-text'>CONNECT</div>
            </button>
            <div className='menu'></div>
        </div>
    );
};

export default Navbar;