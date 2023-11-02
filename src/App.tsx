import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {GlobalStyles} from './styles/GlobalStyles';
import {Main} from './components/main/Main';
import {StateType,} from './state/state';

export type AppPropsType = {
    state: StateType
    addPost: () => void
    addMessage: () => void
    onChangeTextArea: (t: string) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="App">
            <GlobalStyles/>
            <Header/>
            <Main onChangeTextArea={props.onChangeTextArea} addMessage={props.addMessage} addPost={props.addPost}
                  state={{...props.state}}/>
        </div>
    );
}
