import React from 'react';
import {Message} from './Message';
import {styled} from 'styled-components';


export const Messages = () => {

    const messagesData = [
        {
            id: 1,
            message: 'Hi! I\'m a window specialist with great experience.',
            isMine: false
        },
        {
            id: 2,
            message: 'I don\'t need to fix my window',
            isMine: true
        },
        {
            id: 3,
            message: 'Do you need a barber?',
            isMine: false
        },
    ]

    return (
        <StyledMessages>
            {messagesData.map(el => <Message key={el.id} message={el.message} isMine={el.isMine}/>)}
        </StyledMessages>
    );
};

const StyledMessages = styled.div`
`
