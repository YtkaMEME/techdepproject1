import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { stopScroll, enableScroll } from '../../utils/stopScroll';

import { getSendCodeStatus, getCheckCodeStatus } from './store/selectors';
import { actions } from './store/actions';

import './RegistrationModal.scss';

const RegistrationModal = () => {
    const dispatch = useDispatch();

    const sendCodeStatus = useSelector(getSendCodeStatus);
    const checkCodeStatus = useSelector(getCheckCodeStatus);

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                dispatch(actions.closeModal());
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [dispatch]);

    useEffect(() => {
        stopScroll();

        return enableScroll;
    }, []);

    const closeModal = () => dispatch(actions.closeModal());
    const sendCodeRequest = (event) => dispatch(actions.sendCodeRequest({ email }));
    const checkCodeRequest = (event) => dispatch(actions.checkCodeRequest({ code }));

    return (
        <div className="modal-wrapper">
            <div className="modal-wrapper__black-wall" onClick={closeModal} />

            <div className="registration-modal">
                <svg
                    onClick={closeModal}
                    className="registration-modal__close-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                >
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                </svg>

                <div className="registration-modal__content">
                    <h2 className="registration-modal__title">Регистрация</h2>

                    <div className="registration-modal__form form">
                        <div className="form__input-wrapper">
                            <span className="form__input-title">почта из личного кабинета</span>

                            <div className="form__input-field">
                                <input
                                    className="form__input"
                                    value={email}
                                    placeholder="mail@ya.ru"
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                />
                                <button
                                    className="form__send-code-button registration-modal__button"
                                    disabled={!email || sendCodeStatus === 'pending'}
                                    onClick={sendCodeRequest}
                                >
                                    отправть код
                                </button>
                            </div>
                        </div>
                        <div className="form__input-wrapper">
                            <span className="form__input-title">код подтверждения</span>

                            <input
                                className="form__input"
                                value={code}
                                placeholder="CODE123"
                                onChange={(e) => setCode(e.currentTarget.value)}
                            />
                        </div>
                    </div>

                    <button
                        className="registration-modal__button registration-modal__submit-btn"
                        disabled={!code || !email || checkCodeStatus === 'pending'}
                        onClick={checkCodeRequest}
                    >
                        Готово
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationModal;
