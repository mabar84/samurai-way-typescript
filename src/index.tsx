import React from 'react';
import './index.css';
import {AppStateType, store} from './store/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
// import {Provider} from './StoreContext';
import {Store} from 'redux';
import {Provider} from 'react-redux';
// import {StoreType} from './store/redux-store';


const rerenderEntireTree = (state: AppStateType) => {
    console.log('rrrrrrrrr')
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

