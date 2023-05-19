let rerender = () => {
    console.log('')
};

let state = {
    MainPageData: {
        CandidatData: [
            {
                photo: 'https://sun6-23.userapi.com/s/v1/if1/ev2bwfrmgCPZFYZXg_z3LAHSXRBPzXKUomlZrzp57hb9kuI6KabcKoHq0ECcaaSzt9olAPov.jpg?size=2017x2017&quality=96&crop=71,71,2017,2017&ava=1',
                name: 'Невроятнно длинное название клуба, проживающего в Бонч-Бруевича.',
                vk: 'https://vk.com/rhymes',
                disabled: 'true',
                checked: ''
            },
            {
                photo: 'https://privetsochi.ru/uploads/xtext/files/raster_image/6x/1d/dif/sig/v9ND1vzY-Ws.jpg',
                name: 'Моя игра!',
                vk: 'https://vk.com/torchfamily',
                disabled: 'true',
                checked: ''
            },
            {
                photo: 'https://sun6-20.userapi.com/s/v1/if1/VaslwAE5IB5wp73JLyXRooFbNu4S-sXzGr-9ZetUtqnsCP_0VLC7mxxILkKWwwUHk1iNtGxm.jpg?size=1216x1216&quality=96&crop=316,0,1216,1216&ava=1',
                name: 'Классное название',
                vk: 'https://vk.com/ovsyanochan',
                disabled: 'true',
                checked: ''
            }
        ],
        WinnersData: [
            {
                photo: 'https://sun6-23.userapi.com/s/v1/if1/ev2bwfrmgCPZFYZXg_z3LAHSXRBPzXKUomlZrzp57hb9kuI6KabcKoHq0ECcaaSzt9olAPov.jpg?size=2017x2017&quality=96&crop=71,71,2017,2017&ava=1',
                name: 'Название клуба',
                vk: 'https://vk.com/rhymes',
                data: '3 сезон'
            },
            {
                photo: 'https://privetsochi.ru/uploads/xtext/files/raster_image/6x/1d/dif/sig/v9ND1vzY-Ws.jpg',
                name: 'Моя игра!',
                vk: 'https://vk.com/torchfamily',
                data: '2 сезон'
            },
            {
                photo: 'https://sun6-20.userapi.com/s/v1/if1/VaslwAE5IB5wp73JLyXRooFbNu4S-sXzGr-9ZetUtqnsCP_0VLC7mxxILkKWwwUHk1iNtGxm.jpg?size=1216x1216&quality=96&crop=316,0,1216,1216&ava=1',
                name: 'Классное название',
                vk: 'https://vk.com/ovsyanochan',
                data: '1 сезон'
            },
        ]
    }
}


export const subscribe = (rerenderAllTree) => {
    rerender = rerenderAllTree;
}

export const updateCheckbox = (value) => {
    state.MainPageData.CandidatData.forEach((item) => {
        if (item.vk === value) {
            if (item.checked === '') {
                item.checked = 'true';
            } else {
                item.checked = '';
            }
        } else {
            item.checked = '';
            item.disabled = 'true';
        }
    })
    undisable()
    rerender();
}

const undisable = () => {
    let unchecked = 0;
    state.MainPageData.CandidatData.forEach((item)=>{
        if(item.checked===''){
            unchecked++;
        }
    })
    if (unchecked===state.MainPageData.CandidatData.length){
        state.MainPageData.CandidatData.forEach((item)=>{
            item.disabled = '';
        })
    }
}

export default state;