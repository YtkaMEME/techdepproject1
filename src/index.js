import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import state from "./Redux/state";

import { store } from './Redux/store';
import { Provider } from 'react-redux';

let rerenderAllTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<App state={state}/>} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
    );

    reportWebVitals();
}

rerenderAllTree();