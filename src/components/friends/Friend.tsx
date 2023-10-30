import React from 'react';
import {styled} from 'styled-components';
import {FriendType} from '../../state/state';

type FriendPropsType = {
    friend: FriendType
}

export const Friend: React.FC<FriendPropsType> = (props) => {
    return (
        <StyledFriend>
            <img src={require(`./../../img/friends/${props.friend.name}.png`)} title={props.friend.name}
                 alt={props.friend.name}/>
            <span>{props.friend.name}</span>
        </StyledFriend>
    );
};

const StyledFriend = styled.div`

  img {
    border-radius: 15px 10px 25px 5px;
  }

  span {
    display: inline-block;
    margin-bottom: 10px;
    margin-left: -6px;
  }

`