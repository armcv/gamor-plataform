import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from "../assets/player-play-filled.svg";

GamesCategoryGallery.propTypes = {

};

function GamesCategoryGallery(props) {
    return (
        <div>
            <h3>Trending Categories</h3>
            <div className="games-category-wrapper">
                <div className="games-category-card">
                    <span>/01</span>
                    <span className='category-label'>Sport Games</span>
                    <img src={PlayIcon} alt="" />
                </div>
                <div className="games-category-card">02</div>
                <div className="games-category-card">03</div>
                <div className="games-category-card">04</div>
                <div className="games-category-card">05</div>
                <div className="games-category-card">06</div>
                <div className="games-category-card">07</div>
                <div className="games-category-card">08</div>
            </div>

        </div>
    );
}

export default GamesCategoryGallery;