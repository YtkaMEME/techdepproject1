import React from 'react';
import pattern from './Elections.module.css'
import Candidate from "./Candidate/Candidate";

let Elections = (props) => {
    let candidates = props.candidatData.map((item) =>
        <Candidate photo={item.photo} name={item.name} vk={item.vk}/>)
    return (
        <div className={pattern.Elections}>
            <h1 className={pattern.titelElections}>Голосование Конкурса студенческих клубов СПбГУТ · 4 сезон</h1>
            <div className={pattern.timer}><h4>до конца осталось 3 часа 57 минут</h4></div>
            {candidates}
            <div className={pattern.electionsStatus}>
                <h4>сначала надо зарегистрироваться</h4>
            </div>
        </div>
    );
}


export default Elections