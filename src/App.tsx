import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {GlobalStyles} from './styles/GlobalStyles';
import {Main} from './components/main/Main';
import {BrowserRouter} from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <GlobalStyles/>
                <Header/>
                <Main/>
            </div>
        </BrowserRouter>
    );
}
