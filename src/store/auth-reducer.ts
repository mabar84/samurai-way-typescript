import {ActionsType, AuthType} from './store';
import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

const initialState: AuthType = {
    id: null,
    email: null,
    login: null
}
export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...action.authData}
        default:
            return state
    }
}
export const setUserData = (authData: AuthType) => ({type: 'SET-USER-DATA' as const, authData})

export const auth = () => (dispatch: Dispatch) => {
    authAPI.auth()
        .then(res => {
            dispatch(setUserData(res.data.data))
        })
}
export type AuthReducerActionsType = ReturnType<typeof setUserData>
