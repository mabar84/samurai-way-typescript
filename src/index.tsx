import React from 'react';
import './index.css';
import {addMessage, addPost, state, StateType, subscribe, updateNewPostText} from './state/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';


const rerenderEntireTree = (state: StateType) => {
    console.log('rrrrrrrrr')

    ReactDOM.render(
        <BrowserRouter>
            <App onChangeTextArea={updateNewPostText} addMessage={addMessage} addPost={addPost} state={state}/>
        </BrowserRouter>
        ,
        document.getElementById('root')
    )
}


rerenderEntireTree(state)

subscribe(rerenderEntireTree)

