import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {usersReducer} from './users-reducer';
import {friendsReducer} from './friends-reducer';
import {partnersReducer} from './partners-reducer';
import {authReducer} from './auth-reducer';
import thunk from 'redux-thunk';

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        usersPage: usersReducer,
        friendsData: friendsReducer,
        partnersData: partnersReducer,
        authData: authReducer
    }
)
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store

export type asd = {
    aboutMe: string;
    contacts: AsdContacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: AsdPhotos;
}
export type AsdContacts = {
    facebook: string;
    website?: any;
    vk: string;
    twitter: string;
    instagram: string;
    youtube?: any;
    github: string;
    mainLink?: any;
}
export type AsdPhotos = {
    small: string;
    large: string;
}