import React from 'react';
import {UserType} from '../../store/store';
import s from './User.module.scss'
import {useDispatch} from 'react-redux';
import {Button} from '../button/button';
import {followAC, unFollowAC} from '../../store/users-reducer';
import defaultUser from '../../img/small.png'
import {NavLink} from 'react-router-dom';
import {setUserId} from '../../store/profile-reducer';
import axios from 'axios';

type userPropsType = {
    user: UserType
}

export const User: React.FC<userPropsType> = (props) => {
    const {user} = props
    const settings = {
        withCredentials: true,
        headers: {
            'API-KEY': '0088ae57-e9fa-4964-b79a-099d88c982c5'
        }
    }
    const dispatch = useDispatch()
    const unfollowClickHandler = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, settings)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unFollowAC(user.id))
                }
            })
    }
    const followClickHandler = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, settings)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAC(user.id))
                }
            })
    }
    const onClickHandler = () => {
        dispatch(setUserId(+props.user.id))
    }
    return (
        <div className={s.user}>
            <div className={s.left}>
                <NavLink onClick={onClickHandler} to={'/profile/' + user.id}>
                    <img
                        src={user.photos.small || defaultUser}
                        alt="ava"/>
                </NavLink>

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

