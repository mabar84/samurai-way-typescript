import React from 'react';
import {styled} from 'styled-components';

export const Avatar = () => {
    return (
        <StyledAvatar src="https://cs6.pikabu.ru/avatars/1536/v1536759-1512667144.jpg" alt="ava"/>
    );
};

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`