import React from 'react';
import "./Kuppy.css";
import Canine from '../Canine/Canine';
import Feline from '../Feline/Feline';

const Kuppy = () => {
    return (
        <div className='kuppy'>
            <div className="kuppy-title">
                <div className='kuppy-system'>The Kuppy System</div>
                <div className='kuppy-text'>The Kuppy Clans Ecosystem consists of our two Native Tokens- Canine Master and Feline Master.</div>
            </div>
            <Canine/>
            <div id="break-line"></div>
            <Feline/>
        </div>
    );
};

export default Kuppy;