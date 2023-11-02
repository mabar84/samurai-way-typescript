import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './App';
import {StateType} from './state/state';

export const rerenderEntireTree = (
    state: StateType,
    addPost: (p: string) => void,
    addMessage: (m: string) => void,
    onChangeTextArea: (t: string) => void) => {
    console.log('rrrrrrrrr')
    ReactDOM.render(
        <App onChangeTextArea={onChangeTextArea} addMessage={addMessage} addPost={addPost} state={{...state}}/>,
        document.getElementById('root')
    )
}