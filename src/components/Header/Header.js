import React from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../RegistrationModal/store/actions';

import { LogoIcon } from './LogoIcon';
import './Header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const showModal = () => dispatch(actions.showModal());

    return (
        <div className="header">
            <div className="header__inner-wrapper">
                <div className="header__logo-wrapper">
                    <LogoIcon />
                    <h1 className="header__logo-text">Онлайн-выборы Лиги клубов СПбГУТ</h1>
                </div>

                <div className="header__button-wrapper">
                    <button className="header__button" onClick={showModal}>
                        зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
