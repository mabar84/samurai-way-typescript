import React from 'react';
import {AppStateType} from '../../store/redux-store';
import {Dispatch} from 'redux';
import {SetUsersAC, UserType} from '../../store/store';
import {connect} from 'react-redux';
import {Users} from './Users';

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