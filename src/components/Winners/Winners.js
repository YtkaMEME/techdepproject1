import React from 'react';
import Winner from '../Candidate/Candidate';

import '../Elections/Elections.scss';

let Winners = (props) => {
    let winners = props.winnersData.map((item) => (
        <Winner photo={item.photo} name={item.name} vk={item.vk} winInfo={item.data} />
    ));

    // тк блок дублирует верстку кандидатов, то просто используем те же стили и классы
    return (
        <div className="elections">
            <div className="elections__inner-wrapper">
                <h1 className="elections__title">Победители прошлых сезонов</h1>

                <div className="elections__candidates">{winners}</div>
            </div>
        </div>
    );
};

export default Winners;
