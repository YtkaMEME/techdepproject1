import React from 'react';
import pattern from './Winners.module.css'
import Winner from "./Winner/Winner";

let Winners = (props) => {
    let winner = props.winnersData.map((item) =>
        <Winner photo={item.photo} name={item.name} vk={item.vk} data = {item.data}/>)
    return (
        <div className={pattern.Winners}>
            <h1 className={pattern.titelWinners}>Победители</h1>
            <div className={pattern.Winner}>
                {winner}
            </div>
        </div>
    );
}


export default Winners