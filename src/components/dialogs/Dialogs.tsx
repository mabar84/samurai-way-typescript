import React from 'react';
import {styled} from 'styled-components';
import {Users} from './Users';
import {Messages} from './Messages';
import {MessageType, UserType} from '../../state/state';

type DialogsPropsType = {
    messagesData: MessageType[]
    usersData: UserType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <StyledDialogs>
            <Users usersData={props.usersData}/>

            <Messages messagesData={props.messagesData}/>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, max-content) 1fr;
  gap: 30px;
`