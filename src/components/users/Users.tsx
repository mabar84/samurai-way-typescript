import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {UserType} from '../../store/store';
import {AppStateType} from '../../store/redux-store';
import {User} from './User';
import axios from 'axios';

export const Users = () => {
    const initialUsers = useSelector<AppStateType, UserType[]>(state => state.usersData)

    const [users, setUsers] = useState(initialUsers)

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                setUsers(res.data.items)
            })
    }, [])

    return <>
        {users.map(u => <User key={u.id} user={u}/>)}
    </>
}