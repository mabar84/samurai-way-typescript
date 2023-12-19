import React from 'react';
import './index.css';
import store from './store/redux-store';
import {StateType} from './store/store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';

const rerenderEntireTree = (state: StateType) => {
    console.log('rrrrrrrrr')
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

