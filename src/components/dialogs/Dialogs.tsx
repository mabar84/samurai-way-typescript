import React from 'react';
import {styled} from 'styled-components';
import {Partners} from './Partners';
import {Messages} from './Messages';
import {MessageType, PartnerType} from '../../store/store';
import {AddMessage} from '../addMessage/AddMessage';
import {Redirect} from 'react-router-dom';

type DialogsPropsType = {
    messagesData: MessageType[]
    partnersData: PartnerType[]
    currentPostValue: string
    updateNewMessage: (text: string) => void
    sendMessageClick: () => void
    isAuth: boolean
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <StyledDialogs>
            <div className="grid">
                <Partners usersData={props.partnersData}/>
                <Messages messagesData={props.messagesData}/>
            </div>

            <AddMessage
                updateNewMessage={props.updateNewMessage}
                sendMessageClick={props.sendMessageClick}
                currentPostValue={props.currentPostValue}/>
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