import React from 'react';
import {Message} from './Message';
import {styled} from 'styled-components';


export const Messages = () => {
    return (

        <StyledMessages>
            <Message isMine={false} message={'Hi! I\'m a window specialist with great experience.'}/>
            <Message isMine={true} message={'I don\'t need to fix my window'}/>
            <Message isMine={false} message={'Do you need a barber?'}/>
        </StyledMessages>
    );
};

const StyledMessages = styled.div`
`
