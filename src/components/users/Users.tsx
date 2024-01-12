import React from 'react';
import {UserType} from '../../store/store';
import {User} from './User';
import axios from 'axios';
import {Button} from '../button/button';
import s from './Users.module.scss'


type UsersPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <>
            <div className={s.paginator}>
                {pages.map((p) => <Button key={p} buttonName={p.toString()}
                                          className={this.props.currentPage === p ? s.selectedPage : ''}
                                          onClick={() => {
                                              this.onPageChanged(p)
                                          }}/>)}
            </div>
            {this.props.usersData.map(u => <User key={u.id} user={u}/>)}
        </>
    }
}