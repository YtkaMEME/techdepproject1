import React from 'react';

import Header from '../Header/Header';
import Elections from '../Elections/Elections';
import Winners from '../Winners/Winners';
import RegistrationModal from '../RegistrationModal/RegistrationModal';

import './App.css';

const App = (props) => {
    return (
        <>
            <div className="MainPage">
                <Header />
                <Elections candidatData={props.state.MainPageData.CandidatData} updateCheckbox={props.updateCheckbox} />
                <Winners winnersData={props.state.MainPageData.WinnersData} />
            </div>
            <RegistrationModal />
        </>
    );
};

export default App;
