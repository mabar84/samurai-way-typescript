import React from 'react';
import {styled} from 'styled-components';
import {Image} from '../image/Image';
import {Button} from '../button/button';
import {Textarea} from '../textarea/Textarea';
import {Post} from '../post/Post';
import {Avatar} from '../avatar/Avatar';

export const Profile = () => {
    return (
        <StyledProfile>
            <Image/>

            <div className="flex-container">
                <div>
                    <Avatar/>

                    <p>
                        What can i say?
                    </p>
                </div>

                <div>
                    <Textarea/>
                    <Button buttonName={'add post'}/>
                </div>
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

    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }

  }
`