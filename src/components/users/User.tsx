import React from 'react';
import {UserType} from '../../store/store';
import s from './User.module.scss'
import {useDispatch} from 'react-redux';
import {Button} from '../button/button';
import {followAC, unFollowAC} from '../../store/users-reducer';
import defaultUser from '../../img/small.png'

type userPropsType = {
    user: UserType
}

export const User: React.FC<userPropsType> = (props) => {
    const {user} = props

    const dispatch = useDispatch()

    const unfollowClickHandler = () => dispatch(unFollowAC(user.id))
    const followClickHandler = () => dispatch(followAC(user.id))

    return (
        <div className={s.user}>
            <div className={s.left}>
                <img
                    src={user.photos.small || defaultUser}
                    alt="ava"/>
                {user.followed
                    ? <Button buttonName={'Unfollow'} onClick={unfollowClickHandler}/>
                    : <Button buttonName={'Follow'} onClick={followClickHandler}/>}
            </div>
            <div>
                <div>
                    <p>{user.name}</p>
                    <p>{user.status || 'I do not have any status'}</p>
                </div>
            </div>
        </div>
    );
};

