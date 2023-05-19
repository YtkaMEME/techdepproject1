import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalShown: false,
}

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
    },
})

export const { actions, reducer } = counterSlice;
