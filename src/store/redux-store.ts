import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {usersReducer} from './users-reducer';
import {friendsReducer} from './friends-reducer';
import {StoreType} from './store';

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        usersData: usersReducer,
        friendsData: friendsReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)