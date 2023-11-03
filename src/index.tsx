import React from 'react';
import './index.css';
import {store, StateType} from './store/store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';


const rerenderEntireTree = (state: StateType) => {
    console.log('rrrrrrrrr')

    ReactDOM.render(
        <BrowserRouter>
            <App onChangeTextArea={store.updateNewPostText} addMessage={store.addMessage} addPost={store.addPost}
                 state={state}/>
        </BrowserRouter>
        ,
        document.getElementById('root')
    )
}


rerenderEntireTree(store.state)

store.subscribe(rerenderEntireTree)

