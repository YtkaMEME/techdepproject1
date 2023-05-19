import React from 'react';
import { useMedia } from 'react-use';

import pattern from './Candidate.module.scss';

const Candidate = ({ photo, name, vk, winInfo }) => {
    const isSmallScreen = useMedia("(max-width: 800px)");

    // пожалуй можно было бы на grid сверстать, тогда не пришлось бы в js лезть с media-запросами
    return (
        <div className={pattern.Candidate}>
            {isSmallScreen && winInfo && <span className={pattern.winInfo}>{winInfo}</span>}

            <div className={pattern.leftPlate}>
                <div className={pattern.photoWrapper}>
                    <img className={pattern.photo} src={photo} alt="photoClub" />
                    {isSmallScreen && !winInfo && <CheckBox />}
                </div>
                <div className={pattern.text}>
                    <h4 className={pattern.name}>{name}</h4>
                    <a href={vk} target="_blank" rel="noreferrer">
                        <button className={pattern.vk}>ВКонтакте</button>
                    </a>
                </div>
            </div>

            {!isSmallScreen && winInfo && <span className={pattern.winInfo}>{winInfo}</span>}
            {!isSmallScreen && !winInfo && <CheckBox />}
        </div>
    );
};

export default Candidate;

function CheckBox() {
    return (
        <label className={pattern.check}>
            <input type="checkbox" className={pattern.check_input} />
            <span className={pattern.check_box}></span>
        </label>
    );
}
