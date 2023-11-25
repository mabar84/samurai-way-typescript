import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {GlobalStyles} from './styles/GlobalStyles';
import {Main} from './components/main/Main';
import {ActionsType, StateType,} from './store/store';

export type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="App">
            <GlobalStyles/>
            <Header/>
            <Main
                dispatch={props.dispatch}
                state={{...props.state}}/>
        </div>
    );
}
