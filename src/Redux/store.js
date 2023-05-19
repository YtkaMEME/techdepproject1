import { configureStore } from '@reduxjs/toolkit';

import { reducer as registrationReducer } from '../components/RegistrationModal/store/actions';

// Здесь главный редьюсер, который определяет в какой из мини-редьюсеров пойдет ивент
// Мини редьюсеры содаются с помощью createSlice(), state и actions определяются там же
export const store = configureStore({
    reducer: {
        registration: registrationReducer,
    },
});
