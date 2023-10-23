import React from 'react';
import {styled} from 'styled-components';
import {User} from './User';

export const Users = () => {
    return (
        <StyledUsers>

            <User name={'Petr'} id={1}/>
            <User name={'Aramis'} id={2}/>
            <User name={'Guffi'} id={3}/>
            <User name={'Donatello'} id={4}/>
        </StyledUsers>
    );
};

const StyledUsers = styled.div`
`