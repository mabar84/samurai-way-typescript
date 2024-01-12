import {UserType} from './store';

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
            return [...action.users]
        }
        default:
            return state
    }
}

type ActionsType =
    | ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>

export const FollowAC = (userId: string) => ({type: 'FOLLOW' as const, userId})
export const UnFollowAC = (userId: string) => ({type: 'UNFOLLOW' as const, userId})
export const SetUsersAC = (users: UserType[]) => ({type: 'SET-USERS' as const, users})