import React from 'react';
import pattern from './Registration.module.css'
let Registration = (props) => {
    return (
        <div className={pattern.registrationPage}>
            <div className={pattern.registration}>
                <h1 className={pattern.h1}>Регистрация</h1>
                <div className={pattern.forms}>

                </div>
            </div>
        </div>
    );
}


export default Registration