import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalShown: false,

    sendCodeStatus: 'unsent',
    checkCodeStatus: 'unsent',

    approvedEmail: null,
};

const counterSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        showModal: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.modalShown = true;
        },
        closeModal: (state) => {
            state.modalShown = false;
        },

        sendCodeRequest: (state, { email }) => {
            state.sendCodeStatus = 'pending';
            // saga
        },
        sendCodeSuccess: (state) => {
            state.sendCodeStatus = 'success';
        },
        sendCodeError: (state) => {
            state.sendCodeStatus = 'error';
        },

        checkCodeRequest: (state, { email, code }) => {
            state.checkCodeStatus = 'pending';
            // saga
        },
        checkCodeSuccess: (state, { email }) => {
            state.checkCodeStatus = 'success';

            state.approvedEmail = email;
        },
        checkCodeError: (state) => {
            state.checkCodeStatus = 'error';
        },
    },
});

export const { actions, reducer } = counterSlice;
