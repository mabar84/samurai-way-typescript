import React from 'react';
import {styled} from 'styled-components';
import {Icon} from '../icon/Icon';
import {myTheme} from '../../styles/Theme.styled';

type PostPropsType = {
    post: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <StyledPost>
            <img src="https://cs6.pikabu.ru/avatars/1536/v1536759-1512667144.jpg" alt="ava"/>
            <p> {props.post}</p>
            <div className="like">
                <span> {props.likeCount}</span>
                <Icon viewBox={'0 0 56 56'} width={'15'} height={'15'} iconId={'like'}/>
            </div>
        </StyledPost>
    );
};

const StyledPost = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  svg {
    fill: red;
    stroke: yellow;
  }

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  .like {
    margin-left: 10px;
    display: flex;
    align-self: end;
    gap: 5px;
    color: ${myTheme.colors.primary};

    svg {
      margin-top: 4px;
      cursor: pointer;
    }
  }

`