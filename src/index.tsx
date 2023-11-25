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
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    )
}


rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

