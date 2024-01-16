import React from 'react';
import {AppStateType} from '../../store/redux-store';
import {connect} from 'react-redux';
import {UserType} from '../../store/store';
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from '../../store/users-reducer';
import axios from 'axios';
import {Users} from './Users';

type UsersContainerPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

    setUsers: (users: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    render() {
        return <Users
            pageSize={this.props.pageSize}
            usersData={this.props.usersData}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            isFetching={this.props.isFetching}
        />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching})(UsersContainer)