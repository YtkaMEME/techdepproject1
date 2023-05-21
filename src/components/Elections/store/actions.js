import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    candidate: [
        {
            photo: 'https://sun6-23.userapi.com/s/v1/if1/ev2bwfrmgCPZFYZXg_z3LAHSXRBPzXKUomlZrzp57hb9kuI6KabcKoHq0ECcaaSzt9olAPov.jpg?size=2017x2017&quality=96&crop=71,71,2017,2017&ava=1',
            name: 'Невроятнно длинное название клуба, проживающего в Бонч-Бруевича.',
            vk: 'https://vk.com/rhymes',
            id: 1,
            disabled: false,
            checked: false,
            votes: 0
        },
        {
            photo: 'https://privetsochi.ru/uploads/xtext/files/raster_image/6x/1d/dif/sig/v9ND1vzY-Ws.jpg',
            name: 'Моя игра!',
            vk: 'https://vk.com/torchfamily',
            id: 2,
            disabled: false,
            checked: false,
            votes: 0
        },
        {
            photo: 'https://sun6-20.userapi.com/s/v1/if1/VaslwAE5IB5wp73JLyXRooFbNu4S-sXzGr-9ZetUtqnsCP_0VLC7mxxILkKWwwUHk1iNtGxm.jpg?size=1216x1216&quality=96&crop=316,0,1216,1216&ava=1',
            name: 'Классное название',
            vk: 'https://vk.com/ovsyanochan',
            id: 3,
            disabled: false,
            checked: false,
            votes: 0
        }],
    voteButton: false,
};

const electionsSlice = createSlice({
    name: 'elections',
    initialState,
    reducers: {
        updateCheckbox(state, action) {
            // при выборе одного из чекбоксов блокирует остальные
            const checkbox = state.candidate.filter(item=>item.id===action.payload.id);
            checkbox.checked = !checkbox.checked;
            state.candidate.forEach((item)=>{
                if (item.id !== action.payload.id){
                    item.disabled = !item.disabled;
                }
            })
        },
        unDisabled(state){
            // по задумке этот редьюсер должен срабатывать после регистрации и разблокирывать все чекбоксы,
            // но я так и не понял как мне нормально его вызвать
            state.candidate.forEach((item)=> {item.disabled = false})
        },
        votecounte(state){
            // предполагал что будет происходить нормальый счет голосов, но почему-то в person не передается
            // выбранный объект
            const person = state.candidate.filter(item=>item.checked);
            console.log(person)
            if (person.checked){
                person.votes++;
                state.voteButton = true;
            }
        },

    }
});

export const {actions, reducer} = electionsSlice;