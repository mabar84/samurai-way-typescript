import React from 'react';
import s from './Users.module.scss';
import {Button} from '../button/button';
import {User} from './User';
import {UserType} from '../../store/store';
import {Preloader} from '../preloader/Preloader';

type UsersPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    isFetching: boolean
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const {usersData, pageSize, totalUsersCount, currentPage, onPageChanged, isFetching} = props


    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <>
        {isFetching ? <Preloader/> : null}
        <div className={s.paginator}>
            {pages.map((p) => <Button key={p} buttonName={p.toString()} disabled={false}
                                      className={currentPage === p ? s.selectedPage : ''}
                                      onClick={() => {
                                          onPageChanged(p)
                                      }}/>)}
        </div>
        {usersData.map(u => <User key={u.id} user={u}/>)}
    </>;
}