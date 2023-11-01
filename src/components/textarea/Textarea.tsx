import React from 'react';
import {styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';

type TextareaPropsType = {
    placeholder: string
    textAreaRef: React.RefObject<HTMLTextAreaElement>
}

export const Textarea = (props: TextareaPropsType) => {
    return (
        <StyledTextarea ref={props.textAreaRef} placeholder={props.placeholder}>
        </StyledTextarea>
    );
};

const StyledTextarea = styled.textarea`
  min-height: 100px;
  height: 100%;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid ${myTheme.colors.primary};
  background-color: ${myTheme.colors.background};
  color: ${myTheme.colors.primary};
  resize: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::placeholder {
    color: ${myTheme.colors.secondary};

  }
`