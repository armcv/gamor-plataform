import React from 'react';

import Navbar from "../components/navbar";
import MainCard from "../components/main-card";
import GamesCategoryGallery from "../components/games-category-gallery";

import '../App.css'

function Main() {
    return (
        <div className="App">
            <Navbar />
            <MainCard />
            <GamesCategoryGallery />
        </div>
    );
}

export default Main;