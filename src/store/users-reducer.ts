import {ActionsType, UsersPageType, UserType} from './store';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

const initialState: UsersPageType = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
    followingId: ''
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
        case 'SET-FOLLOWING-ID':
            return {...state, followingId: action.id}
        default:
            return state
    }
}

export type UsersReducerActionsType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setFollowingId>

export const followAC = (userId: string) => ({type: 'FOLLOW' as const, userId})
export const unFollowAC = (userId: string) => ({type: 'UNFOLLOW' as const, userId})
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS' as const, users})
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE' as const, currentPage})
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-TOTAL-COUNT' as const, totalCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING' as const, isFetching})
export const setFollowingId = (id: string) => ({type: 'SET-FOLLOWING-ID' as const, id})

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then(res => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(res.data.items))
            dispatch(setTotalUsersCount(res.data.totalCount))
        })
}
export const followUser = (id: string) => (dispatch: Dispatch) => {
    dispatch(setFollowingId(id))
    usersAPI.followUser(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(setFollowingId(''))
        })
}
export const unfollowUser = (id: string) => (dispatch: Dispatch) => {
    dispatch(setFollowingId(id))
    usersAPI.unfollowUser(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowAC(id))
            }
            dispatch(setFollowingId(''))
        })
}

