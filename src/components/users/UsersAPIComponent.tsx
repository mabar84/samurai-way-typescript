import React from 'react';
import {UserType} from '../../store/store';
import axios from 'axios';
import {Users} from './Users';


type UsersPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        console.log(this.props.currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }

    render() {
        return <Users
            setUsers={this.props.setUsers}
            pageSize={this.props.pageSize}
            usersData={this.props.usersData}
            currentPage={this.props.currentPage}
            setCurrentPage={this.props.setCurrentPage}
            setTotalCount={this.props.setTotalCount}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}

        />
    }
}