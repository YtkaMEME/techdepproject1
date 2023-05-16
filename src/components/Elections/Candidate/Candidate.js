import React from 'react';
import pattern from './Candidate.module.css'

let Candidate = (props) => {
    return (
        <div className={pattern.Candidate}>
            <img className={pattern.photo} src = {props.photo} alt='photoClub'/>
            <div className={pattern.text}>
                <h4 className={pattern.name}>{props.name}</h4>
                <a href={props.vk} target = '_blank' rel="noreferrer">
                    <button className={pattern.vk}><h5>ВКонтакте</h5></button>
                </a>
            </div>
            <label className={pattern.check}>
                <input type='checkbox' className={pattern.check_input} disabled/>
                <span className={pattern.check_box}></span>
            </label>
        </div>
    );
}


export default Candidate