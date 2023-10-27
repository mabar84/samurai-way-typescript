import React from 'react';
import {styled} from 'styled-components';
import {User} from './User';

export const Users = () => {

    const usersData = [
        {
            id: 1,
            name: 'Petr'
        }, {
            id: 2,
            name: 'Aramis'
        }, {
            id: 3,
            name: 'Guffi'
        }, {
            id: 4,
            name: 'Donatello'
        },
    ]

    return (
        <StyledUsers>
            {usersData.map(el => <User key={el.id} id={el.id} name={el.name}/>)}
        </StyledUsers>
    );
};

const StyledUsers = styled.div`
`