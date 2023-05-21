import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Elections from '../Elections/Elections';
import Winners from '../Winners/Winners';
import RegistrationModal from '../RegistrationModal/RegistrationModal';
import { getModalShown } from '../RegistrationModal/store/selectors';

import './App.css';

const App = (props) => {
    const modalShown = useSelector(getModalShown);

    return (
        <>
            <div className="MainPage">
                <Header />
                <Elections/>
                <Winners winnersData={props.state.MainPageData.WinnersData} />
            </div>
            {modalShown && <RegistrationModal />}
        </>
    );
};

export default App;
