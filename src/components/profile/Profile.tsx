import React from 'react';
import {styled} from 'styled-components';
import {Image} from '../image/Image';
import {Avatar} from '../avatar/Avatar';
import {AddPost} from '../addPost/AddPost';
import {myTheme} from '../../styles/Theme.styled';
import {Posts} from '../posts/Posts';

export const Profile = () => {

    return (
        <StyledProfile>
            <Image/>

            <div className="flex-container">
                <Avatar/>

                <AddPost/>
            </div>

            <Posts/>
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