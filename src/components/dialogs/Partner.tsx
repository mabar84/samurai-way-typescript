import React from 'react';
import {NavLink} from 'react-router-dom';
import {styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';

type UserPropsType = {
    id: string
    name: string
}

export const Partner = (props: UserPropsType) => {
    return (
        <StyledUser>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </StyledUser>
    );
};

const StyledUser = styled.p`
  .active {
    color: ${myTheme.colors.primary}
  }

  &:hover {
    color: ${myTheme.colors.background}
  }
`