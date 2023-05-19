import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { reducer as registrationReducer } from '../components/RegistrationModal/store/actions';
import { registrationWatcher } from '../components/RegistrationModal/store/saga';

// В сагах делаются запросы к бэку или фронтовому серверу (если таковой есть)
// Делаем запросы именно из саг, а не просто из кода,
// чтобы оставаться синхронизированными с redux стейтом
const sagaMiddleware = createSagaMiddleware();

// Здесь главный редьюсер, который определяет в какой из мини-редьюсеров пойдет ивент
// Мини редьюсеры содаются с помощью createSlice(), state и actions определяются там же
export const store = configureStore({
    reducer: {
        registration: registrationReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(registrationWatcher);
// sagaMiddleware.run(electionsWatcher);
