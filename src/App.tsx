import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {GlobalStyles} from './styles/GlobalStyles';
import {Main} from './components/main/Main';
import {BrowserRouter} from 'react-router-dom';
import {StateType} from './index';


export type AppPropsType = {
    state: StateType
}

export const App: React.FC<AppPropsType> = (props) => {
    console.log(props.state)

    return (
        <BrowserRouter>
            <div className="App">

                <GlobalStyles/>

                <Header/>

                <Main state={{...props.state}}/>
            </div>
        </BrowserRouter>
    );
}
