import React from 'react';
import {FollowAC, UnFollowAC, UserType} from '../../store/store';
import s from './User.module.scss'
import {useDispatch} from 'react-redux';
import {Button} from '../button/button';

type userPropsType = {
    user: UserType
}

export const User: React.FC<userPropsType> = (props) => {
    const {user} = props

    const dispatch = useDispatch()

    const unfollowClickHandler = () => dispatch(UnFollowAC(user.id))
    const followClickHandler = () => dispatch(FollowAC(user.id))


    return (
        <div className={s.user}>
            <div className={s.left}>
                <img
                    src={user.photos.small || 'https://avatars.akamai.steamstatic.com/b6a9e86053fc4a7d906c199a8535563d00a2df07_medium.jpg'}
                    alt="ava"/>
                {user.followed
                    ? <Button buttonName={'Unfollow'} onClick={unfollowClickHandler}/>
                    : <Button buttonName={'Follow'} onClick={followClickHandler}/>}
            </div>
            <div className={s.right}>
                <div>
                    <p>{user.name}</p>
                    <p>{user.status}</p>
                </div>
                <div className={s.location}>
                    {/*<p>{user.location.country}</p>*/}
                    {/*<p>{user.location.city}</p>*/}
                </div>
            </div>


        </div>
    );
};

