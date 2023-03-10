import React from 'react';
import PropTypes from 'prop-types';
import SearchCard from "./search-card";
import Timer from "./timer";
import PlatformChooser from "./platform-chooser";

import SigninButton from './signin-button';
import SignupButton from './signup-button';

MainCard.propTypes = {

};

function MainCard(props) {
    return (
        <div className='main-card'>
            <div className='main-card-row-1'>
                <span className='slogan'>start streaming games differently</span>
                <span>gamor now has stream party platform</span>
                <div className='sign-group' style={{margin: "16px 0 16px "}}>
                    <SignupButton />
                    <SigninButton />
                </div>
            </div>
            <div className='main-card-row-2'>
                <span className='season-notice'>Fornite New Season</span>
                <a className='join-link'>Join Live Stream</a>
                <Timer />
                {/* <div className='game-player-image'>
                    <img src="/image-1.png" />
                </div> */}
            </div>
            <div className='main-card-row-3'>
                <div>01. <span>Choose Platform</span></div>
                <PlatformChooser />
                <div>02. <span>Searching Game</span></div>
                <SearchCard />
            </div>
        </div>
    );
}

export default MainCard;