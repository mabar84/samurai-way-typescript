import {UsersPageType, UserType} from './store';

const initialState: UsersPageType = {
    usersData: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                usersData: state.usersData.map((u) => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                usersData: state.usersData.map((u) => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case 'SET-USERS': {
            return {...state, usersData: action.users}
        }
        case 'SET-TOTAL-COUNT': {
            return state
        }
        default:
            return state
    }
}

type ActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userId: string) => ({type: 'FOLLOW' as const, userId})
export const unFollowAC = (userId: string) => ({type: 'UNFOLLOW' as const, userId})
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS' as const, users})
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE' as const, currentPage})
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-COUNT' as const, totalCount})