import React from 'react';
import {styled} from 'styled-components';
import {Avatar} from '../avatar/Avatar';

type PostPropsType = {
    text: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <StyledPost>

            <div>
                <Avatar/>
                <span> {props.likeCount}</span>
            </div>


            <p> {props.text}</p>

        </StyledPost>
    );
};

const StyledPost = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    width: 28px;
    height: 28px;
  }

`