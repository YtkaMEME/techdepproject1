import './App.css';
import Header from "./components/Header/Header";
import Elections from "./components/Elections/Elections";
import Winners from "./components/Winners/Winners";
import Footer from "./components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import {Route, Routes} from "react-router-dom";

let App = () => {
    return (
        <div className="MainPage">
            <Header/>
            <Elections/>
            <Winners/>
            <Footer/>
            <Routes>
                <Route path='/registration' element={<Registration/>}/>
            </Routes>
        </div>
    );
}

export default App;
