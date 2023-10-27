import {css, styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import React from 'react';

type MessagePropsType = {
    message: string
    isMine: boolean
}

export const Message = (props: MessagePropsType) => {
    return (
        <StyledMessage $isMine={props.isMine}>
            {props.message}
        </StyledMessage>
    )
}

type StyledMessagePropsType = {
    $isMine: boolean
}

const StyledMessage = styled.p<StyledMessagePropsType>`
  max-width: max-content;
  margin-left: auto;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${myTheme.colors.background};
  font-style: italic;
  position: relative;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border: 1px solid ${myTheme.colors.background};
    border-radius: 50%;
    position: absolute;
    left: -26px;
    top: 0;
  }

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    border: 1px solid ${myTheme.colors.background};
    border-radius: 50%;
    position: absolute;
    left: -16px;
    top: 2px;
  }


  ${props => props.$isMine && css`
    margin-left: unset;
      //border: 1px solid ${myTheme.colors.primary};
    &::before, &::after {
      background: ${myTheme.colors.primary};
    }
  `
  }

`