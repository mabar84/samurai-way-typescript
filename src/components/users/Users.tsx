import React from 'react';
import s from './Users.module.scss';
import {Button} from '../button/button';
import {User} from './User';
import {UserType} from '../../store/store';

type UsersPropsType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <>
        <div className={s.paginator}>
            {pages.map((p) => <Button key={p} buttonName={p.toString()}
                                      className={props.currentPage === p ? s.selectedPage : ''}
                                      onClick={() => {
                                          props.onPageChanged(p)
                                      }}/>)}
        </div>
        {props.usersData.map(u => <User key={u.id} user={u}/>)}
    </>;
}