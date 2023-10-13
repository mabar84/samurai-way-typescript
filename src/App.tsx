import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {GlobalStyles} from './styles/GlobalStyles';
import {Main} from './components/main/Main';

export const App = () => {
    return (
        <div className="App">
            <GlobalStyles/>
            <Header/>
            <Main/>
        </div>
    );
}
