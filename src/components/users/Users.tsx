import React, {useEffect,} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SetUsersAC, UserType} from '../../store/store';
import {AppStateType} from '../../store/redux-store';
import {User} from './User';
import axios from 'axios';

export const Users = () => {
    let users = useSelector<AppStateType, UserType[]>(state => state.usersData)
    const dispatch = useDispatch()

    const getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                dispatch(SetUsersAC(res.data.items))
            })
    }

    // useEffect(() => {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(res => {
    //             dispatch(SetUsersAC(res.data.items))
    //         })
    // }, [])

    return <>
        <button onClick={getUsers}>getUsers</button>
        {users.map(u => <User key={u.id} user={u}/>)}
    </>
}