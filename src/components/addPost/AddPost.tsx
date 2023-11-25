import React, {useRef} from 'react';
import {styled} from 'styled-components';
import {Textarea} from '../textarea/Textarea';
import {Button} from '../button/button';
import {myTheme} from '../../styles/Theme.styled';
import {ActionsType} from '../../store/store';

type AddPostPropsType = {
    addPost: () => void
    currentPostValue: string
    onChangeTextArea: (t: string) => void
    dispatch: (action: ActionsType) => void


}

export const AddPost: React.FC<AddPostPropsType> = (props) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        props.addPost()
        // if (textAreaRef.current) {
        //     props.addPost(textAreaRef.current.value)
        //     textAreaRef.current.value = '';
        // }
    }

    const clearPost = () => {
        props.onChangeTextArea('')
        // if (textAreaRef.current) {
        //     textAreaRef.current.value = '';
        // }
    }

    return (
        <StyledAddPost className={'addPost'}>
            <Textarea
                dispatch={props.dispatch}
                onChangeTextArea={props.onChangeTextArea} currentPostValue={props.currentPostValue}
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