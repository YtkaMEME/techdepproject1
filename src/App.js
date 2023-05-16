import './App.css';
import Header from "./components/Header/Header";
import Elections from "./components/Elections/Elections";
import Winners from "./components/Winners/Winners";
// import Footer from "./components/Footer/Footer";

let App = (props) => {
    return (
        <div className="MainPage">
            <Header/>
            <Elections candidatData = {props.state.MainPageData.CandidatData}/>
            <Winners winnersData = {props.state.MainPageData.WinnersData}/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
