import React from 'react';
import pattern from './Registration.module.css'
let Registration = (props) => {
    return (
        <div className={pattern.registrationPage}>
            <div className={pattern.registration}>
                <h1 className={pattern.h1}>Регистрация</h1>
            </div>
            <form className={pattern.forms}>
                <div className={pattern.form1}>
                    <h5>
                        почта из личного кабинета
                    </h5>
                    <input placeholder={"Logins"}/>
                </div>
                <div className={pattern.form2}>
                    <h5>
                    код подтверждения
                    </h5>
                    <input placeholder={"Password"}/>
                </div>
                <div className={pattern}>
                    <input type={"checkbox"}/>
                    <h5>соглашаюсь на обработку
                        персональных данных</h5>
                </div>
                <div>
                    <button>Готово</button>
                </div>
            </form>
        </div>
    );
}


export default Registration