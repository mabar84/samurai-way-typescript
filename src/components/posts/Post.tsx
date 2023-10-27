import React from 'react';
import {styled} from 'styled-components';

type PostPropsType = {
    post: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <StyledPost>

            <img src="https://cs6.pikabu.ru/avatars/1536/v1536759-1512667144.jpg" alt="ava"/>


            <p> {props.post}</p>
            <p> {props.likeCount}</p>

        </StyledPost>
    );
};

const StyledPost = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

`