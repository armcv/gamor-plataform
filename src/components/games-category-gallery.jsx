import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from "../assets/player-play-filled.svg";
import { gameCategories as categories } from "../data/game-categories";

GamesCategoryGallery.propTypes = {

};

function GamesCategoryGallery(props) {
    return (
        <div>
            <h3>Trending Categories</h3>
            <div className="games-category-wrapper">
                {
                    categories.map(({ category, id }) => (
                        <div className="games-category-card" key={id}>
                            <span>/{id}</span>
                            <span className='category-label'>{category} Games</span>
                            <img src={PlayIcon} alt="" />
                        </div>
                    ))
                }
                <div className="games-category-card">
                    <span>VIEW ALL</span>
                    <span className='category-label'>All Categories</span>
                    <img src={PlayIcon} alt="" />
                </div>
            </div>

        </div>
    );
}

export default GamesCategoryGallery;