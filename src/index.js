import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import state, {subscribe, updateCheckbox} from "./Redux/state";
import Registration from "./components/Registration/Registration";

let rerenderAllTree =  () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/registration' element={<Registration/>}/>
                    <Route path='*' element={<App state={state} updateCheckbox={updateCheckbox}/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );

    reportWebVitals();
}
subscribe(rerenderAllTree);
rerenderAllTree();