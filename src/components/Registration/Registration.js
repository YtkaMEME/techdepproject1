import React from 'react';
import pattern from './Registration.module.css'
let Registration = (props) => {
    return (
        <div className={pattern.registrationPage}>
            <div className={pattern.registration}>
                <h1 className={pattern.h1}>Регистрация</h1>
                <form >
                    <div>
                        <input placeholder={"Logins"}/>
                    </div>
                    <div>
                        <input placeholder={"Password"}/>
                    </div>
                    <div>
                        <input type={"checkbox"}/>
                        <h5>соглашаюсь на обработку
                        персональных данных</h5>
                    </div>
                    <div>
                        <button>Готово</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Registration