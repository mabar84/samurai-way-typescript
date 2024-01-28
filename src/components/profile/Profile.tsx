import React from 'react';
import {styled} from 'styled-components';
import {Image} from '../image/Image';
import {Avatar} from '../avatar/Avatar';
import {AddPost} from '../addPost/AddPost';
import {myTheme} from '../../styles/Theme.styled';
import {Posts} from '../posts/Posts';
import {ProfileContainerPropsType} from './ProfileContainer';

export const Profile: React.FC<ProfileContainerPropsType> = (props) => {

    return (
        <StyledProfile>
            <Image/>
            <div className="flex-container">
                <Avatar profile={props.profile}/>

                <AddPost currentPostValue={props.currentPostValue}
                         updateNewMessage={props.updateNewPostText}
                         sendPostClick={props.addPost}
                />
            </div>

            <Posts postsData={props.postsData}/>
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