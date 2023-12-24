import React from 'react';
import './index.css';
import {AppStateType, store} from './store/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import {Provider} from './StoreContext';

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

