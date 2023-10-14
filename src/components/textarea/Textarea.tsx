import React from 'react';
import {styled} from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';

export const Textarea = () => {
    return (
        <StyledTextarea>

        </StyledTextarea>
    );
};

const StyledTextarea = styled.textarea`
  height: 100px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${myTheme.colors.primary_background};
  background-color: ${myTheme.colors.body_background};
  color: ${myTheme.colors.primary_background};
  resize: none;
`