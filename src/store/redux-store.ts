import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {usersReducer} from './users-reducer';
import {friendsReducer} from './friends-reducer';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        usersData: usersReducer,
        friendsData: friendsReducer
    }
)

let store = createStore(reducers)

export default store