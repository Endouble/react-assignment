import React from 'react';

import headerImage from './assets/header.jpg';
import './styles/home.css';

const HomeView = () => (
    <div className="header">
        <h1 className="header__title">
            Rick and Morty Character Information
        </h1>
        <div>
            <img className="header__image" src={headerImage} alt="Rick and Morty" />
        </div>
        <a href="https://rickandmortyapi.com" className="header__link-information" target="_blank" rel="noopener noreferrer">https://rickandmortyapi.com</a>
    </div>
);

export default HomeView;
