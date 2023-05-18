import React from 'react';
import pattern from './Header.module.css'
import logo from './img/logo.svg'
import {NavLink} from "react-router-dom";

let Header = (props) => {

    return (
        <div className={pattern.headerWrapp} id='header'>
            <div className={pattern.logo}>
                <img src={logo} alt='mainLogo'/>
                <h1 className={pattern.h1}>онлайн-выборы Лиги клубов СПбГУТ</h1>
                <div className={pattern.typeButton}>
                    <NavLink to='/registration'>
                        <button className={pattern.registration}><h5>зарегистрироваться</h5></button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}


export default Header