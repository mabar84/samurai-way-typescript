import React from 'react';
import {Message} from './Message';
import {styled} from 'styled-components';
import {MessageType} from '../../state/state';

type MessagesPropsType = {
    messagesData: MessageType[]
}

export const Messages: React.FC<MessagesPropsType> = (props) => {

    return (
        <StyledMessages>
            {props.messagesData.map(el =>
                <Message key={el.id} message={el.message} isMine={el.isMine}/>)}
        </StyledMessages>
    );
};

const StyledMessages = styled.div`
`
