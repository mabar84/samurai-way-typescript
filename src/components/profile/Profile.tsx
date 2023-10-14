import React from 'react';
import {styled} from 'styled-components';
import {Image} from '../image/Image';

export const Profile = () => {
    return (
        <StyledProfile>
            <Image/>

            <div className="flex-container">

                <div>
                    <textarea name="qw" id="qw"></textarea>
                    <button>Add post</button>
                </div>

                <div>
                    <p>
                        What can i say?
                    </p>
                    <img className={'avatar'} src="https://cs6.pikabu.ru/avatars/1536/v1536759-1512667144.jpg"
                         alt="ava"/>
                </div>

            </div>


        </StyledProfile>
    );
};

export const StyledProfile = styled.div`

  .flex-container {
    display: flex;

  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }


`