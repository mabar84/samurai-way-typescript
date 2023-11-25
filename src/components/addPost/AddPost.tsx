import React from 'react';
import {styled} from 'styled-components';
import {Textarea} from '../textarea/Textarea';
import {Button} from '../button/button';
import {myTheme} from '../../styles/Theme.styled';
import {ActionsType, AddPostAC, UpdateNewPostTextActionAC} from '../../store/store';

type AddPostPropsType = {
    currentPostValue: string
    dispatch: (action: ActionsType) => void
}

export const AddPost: React.FC<AddPostPropsType> = (props) => {

    const addPost = () => {
        props.dispatch(AddPostAC())
    }

    const clearPost = () => {
        props.dispatch(UpdateNewPostTextActionAC(''))
    }

    return (
        <StyledAddPost className={'addPost'}>
            <Textarea
                dispatch={props.dispatch}
                currentPostValue={props.currentPostValue}
                placeholder={'Can\'t keep something in yourself?'}/>

            <div className={'buttons'}>
                <Button onClick={clearPost} buttonName={'Clear post'}/>
                <Button onClick={addPost} buttonName={'Add post'}/>
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