import React from 'react';
import {styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {ProfileType} from '../../store/store';
import {Preloader} from '../preloader/Preloader';

type AvatarType = {
    profile: ProfileType | null
}

export const Avatar: React.FC<AvatarType> = (props) => {
    if (!props.profile) return <Preloader/>
    return (
        <StyledAvatar>
            {props.profile
                ? <img src={props.profile.photos.small} alt="ava"/>
                : <img src="https://cs6.pikabu.ru/avatars/1536/v1536759-1512667144.jpg" alt="ava"/>
            }
            <p>{props.profile ? props.profile.aboutMe : 'What can i say?'}</p>
        </StyledAvatar>
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