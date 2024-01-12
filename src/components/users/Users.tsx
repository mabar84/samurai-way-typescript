import React from 'react';
import {UserType} from '../../store/store';
import {User} from './User';
import axios from 'axios';

type UsersPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }

    render() {
        return <>
            {this.props.totalUsersCount}
            {this.props.usersData.map(u => <User key={u.id} user={u}/>)}
        </>
    }
}