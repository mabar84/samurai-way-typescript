import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {usersReducer} from './users-reducer';
import {friendsReducer} from './friends-reducer';
import {partnersReducer} from './partners-reducer';

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        usersPage: usersReducer,
        friendsData: friendsReducer,
        partnersData: partnersReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)