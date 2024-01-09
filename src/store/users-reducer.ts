import {ActionsType, UserType} from './store';

const initialState: UserType[] = []

export const usersReducer = (state: UserType[] = initialState, action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'FOLLOW': {
            return state.map((u) => u.id === action.userId ? {...u, followed: true} : u)
        }
        case 'UNFOLLOW': {
            return state.map((u) => u.id === action.userId ? {...u, followed: false} : u)
        }
        case 'SET-USERS': {
            debugger
            return [...action.users]
        }
        default:
            return state
    }
}
