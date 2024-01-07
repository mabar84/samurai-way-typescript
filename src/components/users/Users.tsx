import React from 'react';
import {useSelector} from 'react-redux';
import {UserType} from '../../store/store';
import {AppStateType} from '../../store/redux-store';
import {User} from './User';

export const Users = () => {
    const users = useSelector<AppStateType, UserType[]>(state => state.usersData)
    console.log(users)
    return <>
        {users.map(u => <User key={u.id} user={u}/>)}
    </>
}