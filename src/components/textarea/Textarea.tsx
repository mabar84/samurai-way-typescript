import React, {ChangeEvent} from 'react';
import {styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {ActionsType} from '../../store/store';

type TextareaPropsType = {
    placeholder: string
    currentPostValue: string
    // dispatch: (action: ActionsType) => void
    updateNewMessage: (text: string) => void
    actionType: 'UPDATE-NEW-MESSAGE-TEXT' | 'UPDATE-NEW-POST-TEXT'
}

export const Textarea = (props: TextareaPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch({type: props.actionType, newText: e.currentTarget.value})
        props.updateNewMessage(e.currentTarget.value)
    }


    return (
        <StyledTextarea
            onChange={onChangeHandler}
            value={props.currentPostValue}
            placeholder={props.placeholder}>
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