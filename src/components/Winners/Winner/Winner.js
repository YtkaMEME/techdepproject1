import React from 'react';
import pattern from './Winner.module.css'
import logo from './img/vk.svg'


let Winner = (props) => {
    return (
        <div className={pattern.Candidate}>
            <img className={pattern.photo} src = {props.photo} alt='photoClub'/>
            <div className={pattern.text}>
                <h4 className={pattern.name}>{props.name}</h4>
                <button className={pattern.vk}><img src={logo} alt='VK'/></button>
            </div>
            <div className={pattern.date}>
                <h4>{props.data}</h4>
            </div>
        </div>
    );
}


export default Winner