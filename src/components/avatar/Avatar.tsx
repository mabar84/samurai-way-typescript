import React from 'react';
import {styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';

export const Avatar = () => {
    return (
        <StyledAvatar>
            <img src="https://cs6.pikabu.ru/avatars/1536/v1536759-1512667144.jpg" alt="ava"/>
            <p>
                What can i say?
            </p>
        </StyledAvatar>


    );
};

const StyledAvatar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-grow: 0;
  width: 50%;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  p {
    cursor: pointer;
  }

  ${myTheme.media.less768} {
    width: 100%;
  }

`