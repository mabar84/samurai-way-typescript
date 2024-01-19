import {ActionsType, AuthType} from './store';

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

export type AuthReducerActionsType = ReturnType<typeof setUserData>
