import './App.css';
import Header from "../Header/Header";
import Elections from "../Elections/Elections";
import Winners from "../Winners/Winners";
import RegistrationModal from "../Registration/Registration";
import React from "react";

const App = (props) => {
    return (
        <div className="MainPage">
            <Header/>
            <Elections candidatData = {props.state.MainPageData.CandidatData} updateCheckbox={props.updateCheckbox}/>
            <Winners winnersData = {props.state.MainPageData.WinnersData}/>
            <RegistrationModal/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
