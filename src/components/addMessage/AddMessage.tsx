import React from 'react';
import {styled} from 'styled-components';
import {Textarea} from '../textarea/Textarea';
import {Button} from '../button/button';
import {myTheme} from '../../styles/Theme.styled';

type AddMessagePropsType = {
    currentPostValue: string
    // dispatch: (action: ActionsType) => void
    sendMessageClick: () => void
    updateNewMessage: (text: string) => void
}

export const AddMessage: React.FC<AddMessagePropsType> = (props) => {

    const addMessage = () => {
        props.sendMessageClick()
    }

    const clearMessage = () => {
        props.updateNewMessage('')
    }

    return (
        <StyledAddPost className={'addPost'}>
            <Textarea
                actionType={'UPDATE-NEW-MESSAGE-TEXT'}
                // dispatch={props.dispatch}
                updateNewMessage={props.updateNewMessage}
                currentPostValue={props.currentPostValue}
                placeholder={'Can\'t keep something in yourself?'}/>

            <div className={'buttons'}>
                <Button disabled={false} onClick={clearMessage} buttonName={'Clear message'}/>
                <Button disabled={false} onClick={addMessage} buttonName={'Add message'}/>
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