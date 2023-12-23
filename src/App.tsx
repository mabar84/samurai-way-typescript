import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {GlobalStyles} from './styles/GlobalStyles';
import {Main} from './components/main/Main';
import {StoreType,} from './store/store';

export type AppPropsType = {
    store: StoreType
}

export const App = () => {
    return (
        <div className="App">
            <GlobalStyles/>
            <Header/>
            <Main/>
        </div>
    );
}
