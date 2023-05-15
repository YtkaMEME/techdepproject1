import React from 'react';
import pattern from './Elections.module.css'
import Candidate from "./Candidate/Candidate";

let CandidatData = [
    {
        photo: 'https://sun6-23.userapi.com/s/v1/if1/ev2bwfrmgCPZFYZXg_z3LAHSXRBPzXKUomlZrzp57hb9kuI6KabcKoHq0ECcaaSzt9olAPov.jpg?size=2017x2017&quality=96&crop=71,71,2017,2017&ava=1',
        name: 'Название клуба',
        vk: 'https://vk.com/rhymes'
    },
    {
        photo: 'https://privetsochi.ru/uploads/xtext/files/raster_image/6x/1d/dif/sig/v9ND1vzY-Ws.jpg',
        name: 'Моя игра!',
        vk: 'https://vk.com/torchfamily'
    },
    {
        photo: 'https://sun6-20.userapi.com/s/v1/if1/VaslwAE5IB5wp73JLyXRooFbNu4S-sXzGr-9ZetUtqnsCP_0VLC7mxxILkKWwwUHk1iNtGxm.jpg?size=1216x1216&quality=96&crop=316,0,1216,1216&ava=1',
        name: 'Классное название',
        vk: 'https://vk.com/ovsyanochan'
    },
]

let Elections = (props) => {
    let candidates = CandidatData.map((item)=>
        <Candidate photo = {item.photo} name = {item.name} vk = {item.vk}/>)
    return (
        <div className={pattern.Elections}>
            <h1 className={pattern.titelElections}>Голосование</h1>
            <div className={pattern.Candidates}>
                {candidates}
            </div>
            <div className={pattern.electionsStatus}>
                <h4>сначала надо зарегистрироваться</h4>
            </div>
        </div>
    );
}


export default Elections