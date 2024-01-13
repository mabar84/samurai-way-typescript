import React from 'react';
import {AppStateType} from '../../store/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {UserType} from '../../store/store';
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from '../../store/users-reducer';
import axios from 'axios';
import {Users} from './Users';

type UsersContainerPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
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
            pageSize={this.props.pageSize}
            usersData={this.props.usersData}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
        />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)