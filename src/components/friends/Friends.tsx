import React from 'react';
import {styled} from 'styled-components';
import {FriendType} from '../../store/store';
import {Friend} from './Friend';

type FriendsPropsType = {
    friendsData: FriendType[]
}

export const Friends: React.FC<FriendsPropsType> = (props) => {
    return (
        <StyledFriends>
            {props.friendsData.map(f => <Friend key={f.id} friend={f}/>)}
        </StyledFriends>
    );
};

const StyledFriends = styled.div``;