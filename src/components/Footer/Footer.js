import React from 'react';
import pattern from './Footer.module.css'
import vk from './img/vk.svg'
import ig from './img/ig.svg'


let Footer = (props) => {
    return (
        <div className={pattern.footerWrapp}>
            <div className={pattern.footer}>
                <div className={pattern.info}>
                    <h4><p>Студенческий совет СПбГУТ</p> Cанкт-Петербург, пр. Большевиков, 22 к1, каб. 119</h4>
                </div>
                <div className={pattern.buttons}>
                    <button className={pattern.vk}>
                        <img src={vk} alt='VK'/>
                    </button>
                    <button className={pattern.instagram}>
                        <img src={ig} alt='IG'/>
                    </button>
                    <button className={pattern.feedback}>
                        <h4>обратная связь</h4>
                    </button>
                </div>
                <div className={pattern.copyright}>

                </div>
            </div>
        </div>
    );
}


export default Footer