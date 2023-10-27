import React from 'react';
import {styled} from 'styled-components';
import {Post} from './Post';

export const Posts = () => {

    const postsData = [
        {
            id: 1,
            post: 'My first post',
            likeCount: 22
        },
        {
            id: 2,
            post: 'Hello, World!',
            likeCount: 11
        },
        {
            id: 3,
            post: 'I\m going to sleep',
            likeCount: 0
        },
    ]

    return (
        <StyledPosts>
            {postsData.map(el => <Post key={el.id} post={el.post} likeCount={el.likeCount}/>)}
        </StyledPosts>
    );
};

const StyledPosts = styled.div`

`