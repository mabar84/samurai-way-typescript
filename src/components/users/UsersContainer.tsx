import React from 'react';
import {AppStateType} from '../../store/redux-store';
import {connect} from 'react-redux';
import {UserType} from '../../store/store';
import {getUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from '../../store/users-reducer';
import {Users} from './Users';
import {usersAPI} from '../../api/api';

type UsersContainerPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

    getUsers: (currentPage: number, pageSize: number) => void


    setUsers: (users: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(res => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(res.data.items)
        //         this.props.setTotalUsersCount(res.data.totalCount)
        //     })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
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
    {setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching, getUsers})(UsersContainer)