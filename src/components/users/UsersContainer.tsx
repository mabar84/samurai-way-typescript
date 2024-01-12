import React from 'react';
import {AppStateType} from '../../store/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Users} from './Users';
import {UserType} from '../../store/store';
import {SetUsersAC} from '../../store/users-reducer';

const mapStateToProps = (state: AppStateType) => {
    return {
        usersData: state.usersData
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: (users: UserType[]) => {
            dispatch(SetUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)