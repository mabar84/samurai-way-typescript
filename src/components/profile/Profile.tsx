import React from 'react';
import {styled} from 'styled-components';
import {Image} from '../image/Image';
import {Avatar} from '../avatar/Avatar';
import {AddPost} from '../addPost/AddPost';
import {myTheme} from '../../styles/Theme.styled';
import {Posts} from '../posts/Posts';
import {ActionsType, PostType} from '../../store/store';

type ProfilePropsType = {
    postsData: PostType[]
    currentPostValue: string
    // dispatch: (action: ActionsType) => void
    sendMessageClick: () => void
    updateNewMessage: (text: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <StyledProfile>
            <Image/>

            <div className="flex-container">
                <Avatar/>

                <AddPost currentPostValue={props.currentPostValue}
                         updateNewMessage={props.updateNewMessage}
                         sendPostClick={props.sendMessageClick}
                    // dispatch={props.dispatch}

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