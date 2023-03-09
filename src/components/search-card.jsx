import React from 'react';
import PropTypes from 'prop-types';
import Icon  from "../assets/adjustments-horizontal.svg";

SearchCard.propTypes = {

};

function SearchCard(props) {
    return (
        <div className='search-card'>
            <div className='card-header'>
                <span className='title'>COD Warzone</span>
                <button>
                    <img src={Icon} alt="" />
                </button>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <span className='id'>1</span>
                    <span>Dr. Team</span>
                    <div className='avatar-group'>
                        <img src="/avatar.jpeg" alt="" />
                        <img src="/avatar.jpeg" alt="" />
                    </div>
                    <button>+</button>
                </div>
                <div className='row'>
                    <span className='id'>2</span>
                    <span>Mia Plays</span>
                    <span></span>
                    <button>+</button>
                </div>
                <div className='row'>
                    <span className='id'>2</span>
                    <span>Mia Plays</span>
                    <span></span>
                    <button>+</button>
                </div>
                <div className='row'>
                    <span className='id'>2</span>
                    <span>Mia Plays</span>
                    <span></span>
                    <button>+</button>
                </div>
                <button className='search-button'>
                    Search Now
                </button>
            </div>
        </div>
    );
}

export default SearchCard;