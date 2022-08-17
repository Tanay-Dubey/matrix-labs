import React from 'react';
import "./Tokenomics.css";

const Tokenomics = () => {
    return (
        <div id="token">
            <div id="tokentitle">TOKENOMICS</div>
            <div id="chestinfo">
                <div id="row1">
                    <div className='chestbox'>
                        <div className='chest'></div>
                        <div className='chest-text-row1'>10% TEAM LOCK</div>
                    </div>
                    <div className='chestbox'>
                    <div className='chest'></div>
                        <div className='chest-text-row1'>30% LIQUIDITY</div>
                    </div>
                </div>
                <div id="row2">
                <div className='chestbox'>
                        <div className='chest'></div>
                        <div className='chest-text-row2'>20% STAKING REWARDS</div>
                    </div>
                    <div className='chestbox'>
                    <div className='chest'></div>
                        <div className='chest-text-row2'>40% FAIR LAUNCH</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;