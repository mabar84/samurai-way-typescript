import React from 'react';
import {styled} from 'styled-components';
import {Users} from './Users';
import {Messages} from './Messages';

export const Dialogs = () => {
    return (
        <StyledDialogs>
            <Users/>


            <Messages/>

        </StyledDialogs>
    );
};


const StyledDialogs = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, max-content) 1fr;
  gap: 30px;
`