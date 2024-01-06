import React from 'react';
import {styled} from 'styled-components';
import {FriendType} from '../../store/store';
import {Friend} from './Friend';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../store/redux-store';

type FriendsPropsType = {
    // friendsData: FriendType[]
}


export const Friends: React.FC<FriendsPropsType> = (props) => {

    const friendsData = useSelector<AppStateType, FriendType[]>(state => state.friendsData)

    return (
        <div>
            {friendsData.map(f => <Friend key={f.id} friend={f}/>)}
        </div>
    );
};
