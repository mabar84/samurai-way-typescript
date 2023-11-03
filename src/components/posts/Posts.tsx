import React from 'react';
import {styled} from 'styled-components';
import {Post} from './Post';
import {PostType} from '../../store/store';

type PostsPropsType = {
    postsData: PostType[]
}

export const Posts: React.FC<PostsPropsType> = (props) => {


    return (
        <StyledPosts>
            {props.postsData.map(el =>
                <Post key={el.id} post={el.post} likeCount={el.likeCount}/>)}
        </StyledPosts>
    );
};

const StyledPosts = styled.div`

`