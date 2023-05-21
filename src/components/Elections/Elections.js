import React, {useState, useEffect} from 'react';

import Candidate from '../Candidate/Candidate';
import './Elections.scss';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "./store/actions";

const ELECTIONS_END = new Date('2023-07-20'); // надо сюда проставить настоящее время окончания выборов

// стоит проверить краевые случаи (особенно переход из часа к часу)
const getRemainedMinutes = () => {
    const remainTime = ELECTIONS_END - new Date();
    return Math.max(0, Math.floor(remainTime / 1000 / 60) % 60);
};
const getRemainedHours = () => {
    const remainTime = ELECTIONS_END - new Date();
    return Math.max(0, Math.floor(remainTime / 1000 / 60 / 60));
};

const Elections = () => {
    const [isElectionsEnded, setIsElectionsEnded] = useState(new Date() > ELECTIONS_END);

    const [hours, setHours] = useState(getRemainedHours());
    const [minutes, setMinutes] = useState(getRemainedMinutes());

    useEffect(() => {
        // setInterval работает не четко за обозначенный интервал
        // (например если js-поток перегружен или пользователь переключился на другую вкладку)
        // Поэтому обовляем таймер чаще чем раз в минуту
        const interval = setInterval(() => {
            if (new Date() > ELECTIONS_END) {
                setIsElectionsEnded(true);
                return clearInterval(interval);
            }

            setHours(getRemainedHours());
            setMinutes(getRemainedMinutes());
        }, 20 * 1000);
    }, []); // здесь пустой массив, чтобы эффект случился только при первом рендере

    // Есть сильные проблемы с перерендером картинки, если кликать на чек-бокс.
    // Незн с чем связано, по идее должны обновляться только та часть, в которой изменились пропсы (ток чекбоксы)
    // Можно попробовать не передавать сразу в кандидата checkbox-пропсы, а вычислять их в <Checkbox />
    // Возможно что это проблемы со стейтом, если он обновляет сразу все поля (я не увидел что редакс используется)

    // UPD: это заметно только если включен disable-cache в dev-tools, ничего такого


    const c = useSelector(state => state.candidate.candidate)

    const candidates = c.map((item) => (
        <Candidate photo={item.photo} name={item.name} vk={item.vk} disabled={item.disabled}
                   checked={item.checked} id={item.id}/>));

    let timerText;
    if (isElectionsEnded) {
        timerText = 'голосования уже закончились';
    } else if (hours === 0) {
        timerText = `до конца осталось ${minutes} ${getNoun(minutes, 'минута', 'минуты', 'минут')}`;
    } else {
        timerText = `до конца осталось ${hours} ${getNoun(hours, 'час', 'часа', 'часов')} ${minutes} ${getNoun(
            minutes,
            'минута',
            'минуты',
            'минут',
        )}`;
    }

    const isRegistrated = true;

    return (
        <div className="elections">
            <div className="elections__inner-wrapper">
                <h1 className="elections__title">Голосование Конкурса студенческих клубов СПбГУТ · 4 сезон</h1>
                <span className="elections__timer">{timerText}</span>

                <div className="elections__candidates">{candidates}</div>

                {!isRegistrated && <span className="elections__warning">сначала надо зарегистрироваться</span>}
                {isRegistrated && <ButtonVote/>}
            </div>
        </div>
    );
};

let ButtonVote = () => {
    const dispatch = useDispatch();
    const voteButton = useSelector(state=> state.voteButton)
    return (
        <button className="elections__votebutton" onClick={() => dispatch(actions.votecounte())} disabled={voteButton}>
            проголосовать
        </button>
    )
}

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

export default Elections;
