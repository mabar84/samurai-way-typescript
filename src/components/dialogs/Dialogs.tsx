import React from 'react';
import {styled} from 'styled-components';
import {Users} from './Users';
import {Messages} from './Messages';
import {ActionsType, MessageType, UserType} from '../../store/store';
import {AddMessage} from '../addMessage/AddMessage';

type DialogsPropsType = {
    messagesData: MessageType[]
    usersData: UserType[]
    currentPostValue: string
    // dispatch: (action: ActionsType) => void
    sendMessageClick: () => void
    updateNewMessage: (text: string) => void

}


export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <StyledDialogs>
            <div className="grid">
                <Users usersData={props.usersData}/>

                <Messages messagesData={props.messagesData}/>
            </div>


            <AddMessage
                updateNewMessage={props.updateNewMessage}
                sendMessageClick={props.sendMessageClick} currentPostValue={props.currentPostValue}/>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  height: 100%;

  .grid {
    display: grid;
    grid-template-columns: minmax(100px, max-content) 1fr;
    gap: 30px;
  }

  .addPost {
    width: 100%;
  }





`