import React from 'react';
import "./Tax.css";

const Tax = () => {
    return (
        <div className='tax'>
            <div className='tax-title'>TAX</div>
            <div className='tax-text'>
                <div className='text1'>3% Buy Tax 2% Reserve 1% Burn</div>
                <div id="taxline"></div>
                <div className='text2'>37% Sell Tax 6% Marketing 1% Burn</div>
            </div>
        </div>
    );
};

export default Tax;