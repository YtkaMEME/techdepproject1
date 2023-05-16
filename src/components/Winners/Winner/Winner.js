import React from 'react';
import pattern from './Winner.module.css'


let Winner = (props) => {
    return (
        <div className={pattern.Candidate}>
            <img className={pattern.photo} src={props.photo} alt='photoClub'/>
            <div className={pattern.text}>
                <h4 className={pattern.name}>{props.name}</h4>
                <a href={props.vk} target='_blank' rel="noreferrer">
                    <button className={pattern.vk}><h5>ВКонтакте</h5></button>
                </a>
            </div>
            <div className={pattern.date}>
                <h4>{props.data}</h4>
            </div>
        </div>
);
}


export default Winner