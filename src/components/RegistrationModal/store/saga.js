import { call, put, takeLatest, all } from 'redux-saga/effects';

import { post } from '../../../utils/requests';

import { actions } from './actions';

export function* registrationWatcher() {
    yield all([takeLatest(actions.sendCodeRequest, sendCodeSaga), takeLatest(actions.checkCodeRequest, checkCodeSaga)]);
}

function* sendCodeSaga(action) {
    const { email } = action.payload;

    try {
        // здесь будут запросы в бэк или фронтбэк, оказывается с фронта нельзя дергать эти ручки
        const responses = yield all([
            yield call(() => post('https://2fabonch-dev.ek8s.io/auth/email-code', { email, trainingForm: 'Очная' })),
            yield call(() => post('https://2fabonch-dev.ek8s.io/auth/email-code', { email, trainingForm: 'Зачная' })),
        ]);

        // ...
    } catch (error) {
        console.log(error);
        yield put(actions.sendCodeError());
    }
}

function* checkCodeSaga(action) {
    const { code } = action.payload;
    try {
        // здесь будут запросы в бэк или фронтбэк, оказывается с фронта нельзя дергать эти ручки
        const response = yield call(() => post('https://url', { code }));

        // ...
    } catch (error) {
        console.log(error);
        yield put(actions.checkCodeError());
    }
}
