import React from 'react';
import {styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';

type ButtonPropsType = {
    buttonName: string
}


export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton>
            {props.buttonName}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  background-color: ${myTheme.colors.primary_background};
  color: ${myTheme.colors.text};
  cursor: pointer;
  border: 1px solid ${myTheme.colors.primary_background};

  &:hover {
    opacity: 0.8;
      // box-shadow: 0 1px ${myTheme.colors.primary_background};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: none;

  }

`