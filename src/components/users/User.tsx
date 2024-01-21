import React from 'react';
import {UserType} from '../../store/store';
import s from './User.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../button/button';
import {followUser, unfollowUser} from '../../store/users-reducer';
import defaultUser from '../../img/small.png'
import {NavLink} from 'react-router-dom';
import {setUserId} from '../../store/profile-reducer';
import {AppStateType} from '../../store/redux-store';

type userPropsType = {
    user: UserType
}

export const User: React.FC<userPropsType> = (props) => {
    const {user} = props
    const dispatch = useDispatch()
    const followingId = useSelector<AppStateType, string>((state) => state.usersPage.followingId)

    const onClickHandler = () => {
        dispatch(setUserId(+props.user.id))
    }
    const followClickHandler = () => {
        dispatch(followUser(user.id))
    }
    const unfollowClickHandler = () => {
        dispatch(unfollowUser(user.id))
    }
    return (
        <div className={s.user}>
            <div className={s.left}>
                <NavLink onClick={onClickHandler} to={'/profile/' + user.id}>
                    <img
                        src={user.photos.small || defaultUser}
                        alt="ava"/>
                </NavLink>

                {user.followed ?
                    <Button disabled={followingId === user.id} buttonName={'Unfollow'} onClick={unfollowClickHandler}/>
                    : <Button disabled={followingId === user.id} buttonName={'Follow'} onClick={followClickHandler}/>}
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

