import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {GlobalStyles} from './styles/GlobalStyles';
import {Main} from './components/main/Main';
import {BrowserRouter} from 'react-router-dom';
import {addMessage, onChangeTextArea, StateType,} from './state/state';

export type AppPropsType = {
    state: StateType
    addPost: (post: string) => void
    addMessage: (message: string) => void
    onChangeTextArea: (t: string) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <GlobalStyles/>
                <Header/>
                <Main onChangeTextArea={props.onChangeTextArea} addMessage={props.addMessage} addPost={props.addPost}
                      state={{...props.state}}/>
            </div>
        </BrowserRouter>
    );
}
