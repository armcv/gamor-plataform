import React from 'react';
import PropTypes from 'prop-types';
import SearchCard from "./search-card";
import Timer from "./timer";
import PlatformChooser from "./platform-chooser";

MainCard.propTypes = {

};

function MainCard(props) {
    return (
        <div className='main-card'>
            <div className='main-card-row-1'>
                <span className='slogan'>start streaming games differently</span>
                <span>gamor now has stream party platform</span>
            </div>
            <div className='main-card-row-2'>
                <h3>Fornite New Season</h3>
                <h4>Join Live Stream</h4>
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