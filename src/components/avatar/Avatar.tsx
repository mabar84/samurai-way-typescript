import React from 'react';
import {styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {ProfileType} from '../../store/store';
import {Preloader} from '../preloader/Preloader';
import {ProfileStatus} from '../profile/ProfileStatus';

type AvatarType = {
    profile: ProfileType | null
    status: string
}

export const Avatar: React.FC<AvatarType> = (props) => {
    if (!props.profile) return <Preloader/>
    return (
        <div>
            <p>{props.profile.aboutMe ? props.profile.aboutMe : 'What can i say?'}</p>
            <StyledAvatar>
                {props.profile && props.profile.photos.small
                    ? <img src={props.profile.photos.small} alt="ava"/>
                    : <img src="https://cs6.pikabu.ru/avatars/1536/v1536759-1512667144.jpg" alt="ava"/>
                }
                <ProfileStatus status={props.status}/>
            </StyledAvatar>
        </div>

    );
};

const StyledAvatar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-grow: 0;
  width: 50%;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  p {
    cursor: pointer;
  }

  ${myTheme.media.less768} {
    width: 100%;
  }

`