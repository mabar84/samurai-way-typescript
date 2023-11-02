import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './App';
import {StateType} from './state/state';

export const rerenderEntireTree = (state: StateType, addPost: (p: string) => void, addMessage: (m: string) => void) => {
    ReactDOM.render(
        <App addMessage={addMessage} addPost={addPost} state={{...state}}/>,
        document.getElementById('root')
    )
}