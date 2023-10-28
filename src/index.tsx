import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';


let state: StateType = {
    messagesData: [
        {
            id: 1,
            message: 'Hi! I\'m a window specialist with great experience.',
            isMine: false
        },
        {
            id: 2,
            message: 'I don\'t need to fix my window',
            isMine: true
        },
        {
            id: 3,
            message: 'Do you need a barber?',
            isMine: false
        },
    ]
}

export type MessageType = {
    id: number
    message: string
    isMine: boolean
}

export type StateType = {
    messagesData: MessageType[]
}

ReactDOM.render(
    <App state={{...state}}/>,
    document.getElementById('root')
);