import React from 'react';
import {styled} from 'styled-components';
import {Textarea} from '../textarea/Textarea';
import {Button} from '../button/button';
import {myTheme} from '../../styles/Theme.styled';
import {ActionsType} from '../../store/store';

type AddMessagePropsType = {
    currentPostValue: string
    dispatch: (action: ActionsType) => void
}

export const AddMessage: React.FC<AddMessagePropsType> = (props) => {

    const addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
    }

    const clearMessage = () => {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})
    }

    return (
        <StyledAddPost className={'addPost'}>
            <Textarea
                dispatch={props.dispatch}
                currentPostValue={props.currentPostValue}
                placeholder={'Can\'t keep something in yourself?'}/>

            <div className={'buttons'}>
                <Button onClick={clearMessage} buttonName={'Clear message'}/>
                <Button onClick={addMessage} buttonName={'Add message'}/>
            </div>

        </StyledAddPost>
    );
};

const StyledAddPost = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: 50%;

  .buttons {
    width: min-content;
    display: flex;
    justify-content: end;
    flex-direction: column;
    gap: 10px;

    ${myTheme.media.less768} {
      flex-direction: row;
    }
  }

  ${myTheme.media.less768} {
    width: 100%;
    flex-direction: column;
  }
`