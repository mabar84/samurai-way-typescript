import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './App';
import {addMessage, addPost, updateNewPostText, StateType} from './state/state';
import {BrowserRouter} from 'react-router-dom';


export const rerenderEntireTree = (state: StateType) => {
    console.log('rrrrrrrrr')


    ReactDOM.render(
        <BrowserRouter>
            <App onChangeTextArea={updateNewPostText} addMessage={addMessage} addPost={addPost} state={state}/>
        </BrowserRouter>
        ,
        document.getElementById('root')
    )
}