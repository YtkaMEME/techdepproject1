import React from 'react';

import { LogoIcon } from './LogoIcon';

import './Header.scss';

const Header = ({ showRegistrationModal }) => {
    return (
        <div className="header">
            <div className="header__inner-wrapper">
                <div className="header__logo-wrapper">
                    <LogoIcon />
                    <h1 className="header__logo-text">Онлайн-выборы Лиги клубов СПбГУТ</h1>
                </div>

                <div className="header__button-wrapper">
                    <button className="header__button" onClick={showRegistrationModal}>
                        зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
