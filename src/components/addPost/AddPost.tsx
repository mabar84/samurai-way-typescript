import React from 'react';
import {styled} from 'styled-components';
import {Textarea} from '../textarea/Textarea';
import {Button} from '../button/button';
import {myTheme} from '../../styles/Theme.styled';

export const AddPost = () => {
    return (
        <StyledAddPost className={'addPost'}>
            <Textarea placeholder={'Can\'t keep something in yourself?'}/>

            <div className={'buttons'}>
                <Button buttonName={'Clear post'}/>
                <Button buttonName={'Add post'}/>
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