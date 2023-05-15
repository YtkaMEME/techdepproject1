import React from 'react';
import pattern from './Candidate.module.css'
import logo from './img/vk.svg'


let Candidate = (props) => {
    return (
        <div className={pattern.Candidate}>
            <img className={pattern.photo} src = {props.photo} alt='photoClub'/>
            <div className={pattern.text}>
                <h4 className={pattern.name}>{props.name}</h4>
                <button className={pattern.vk}><img src={logo} alt='VK'/></button>
            </div>
            {/*<div className={pattern.chekboxstyle}>*/}
            {/*    <input type='checkbox' className={pattern.chekbox}/>*/}
            {/*</div>*/}
        </div>
    );
}


export default Candidate