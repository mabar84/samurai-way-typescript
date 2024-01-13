import React from 'react';
import {AppStateType} from '../../store/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {UserType} from '../../store/store';
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from '../../store/users-reducer';
import {UsersAPIComponent} from './UsersAPIComponent';

const mapStateToProps = (state: AppStateType) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)