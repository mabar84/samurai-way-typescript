import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {usersReducer} from './users-reducer';
import {friendsReducer} from './friends-reducer';
import {partnersReducer} from './partners-reducer';
import {authReducer} from './auth-reducer';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        usersPage: usersReducer,
        friendsData: friendsReducer,
        partnersData: partnersReducer,
        authData: authReducer,
        form: formReducer
    }
)
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store