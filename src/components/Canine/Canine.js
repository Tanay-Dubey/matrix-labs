import React from 'react';
import "./Canine.css";
import Buttons from "../Buttons/Buttons";
import Tokenomics from '../Tokenomics/Tokenomics';
import Tax from '../Tax/Tax';

const Canine = () => {
    return (
        <div className='canine'>
            <div className='canine-master'>
                <div className='canine-info'>
                    <div className='canine-img'></div>
                    <Buttons/>
                </div>
                <Tokenomics/>
                <Tax/>
            </div>
        </div>
    );
};

export default Canine;