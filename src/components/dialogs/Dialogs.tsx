import React from 'react';
import {styled} from 'styled-components';
import {Users} from './Users';
import {Messages} from './Messages';
import {MessageType} from '../../index';

type DialogsPropsType = {
    messagesData: MessageType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    console.log(props)
    return (
        <StyledDialogs>
            <Users/>

            <Messages messagesData={props.messagesData}/>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, max-content) 1fr;
  gap: 30px;
`