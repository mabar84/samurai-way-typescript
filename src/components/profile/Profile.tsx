import React from 'react';
import {styled} from 'styled-components';
import {Image} from '../image/Image';
import {Button} from '../button/button';
import {Textarea} from '../textarea/Textarea';
import {Post} from '../post/Post';
import {Avatar} from '../avatar/Avatar';
import {AddPost} from '../addPost/AddPost';
import {myTheme} from '../../styles/Theme.styled';

export const Profile = () => {

    return (
        <StyledProfile>
            <Image/>

            <div className="flex-container">
                <Avatar/>

                <AddPost/>
            </div>

            <Post text={'My first post'} likeCount={22}/>
            <Post text={'Hello, World!'} likeCount={11}/>
            <Post text={'I\m going to sleep'} likeCount={9}/>
        </StyledProfile>
    );
};

export const StyledProfile = styled.div`
  .flex-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: space-between;

    ${myTheme.media.less768} {
      flex-direction: column;
    }
  }
`