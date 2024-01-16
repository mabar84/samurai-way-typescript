import {UsersPageType, UserType} from './store';

const initialState: UsersPageType = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true
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
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
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
    | ReturnType<typeof toggleIsFetchingAC>

export const followAC = (userId: string) => ({type: 'FOLLOW' as const, userId})
export const unFollowAC = (userId: string) => ({type: 'UNFOLLOW' as const, userId})
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS' as const, users})
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE' as const, currentPage})
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-COUNT' as const, totalCount})
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING' as const, isFetching})