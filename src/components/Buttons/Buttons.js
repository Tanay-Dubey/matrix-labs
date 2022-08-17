import React from 'react';
import "./Buttons.css";
import Charticon from "../../images/charticon.png";
import Carticon from "../../images/carticon.png";
import Contracticon from "../../images/contracticon.png";

const Buttons = () => {
    return (
        <div className='canine-btns'>
            <div className='button'>
                <div className="icon-box">
                    <img src={Carticon}></img>
                </div>
                <div className='button-label'>BuyNow</div>
                <div className='angles'>
                    <div className='angle1'></div>
                    <div className='angle2'></div>
                </div>
            </div>
            <div className='button'>
                <div className="icon-box">
                    <img src={Charticon}></img>
                </div>
                <div className='button-label'>Chart</div>
                <div className='angles'>
                    <div className='angle1'></div>
                    <div className='angle2'></div>
                </div>
            </div>
            <div className='button'>
                <div className="icon-box">
                    <img src={Contracticon}></img>
                </div>
                <div className='button-label'>Contract</div>
                <div className='angles'>
                    <div className='angle1'></div>
                    <div className='angle2'></div>
                </div>
            </div>
        </div>
    );
};

export default Buttons;