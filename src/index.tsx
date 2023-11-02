import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state} from './state/state';
import {addPost} from './state/state';
import {addMessage} from './state/state';

ReactDOM.render(
    <App addMessage={addMessage} addPost={addPost} state={{...state}}/>,
    document.getElementById('root')
);