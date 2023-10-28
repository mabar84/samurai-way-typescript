import React from 'react';
import {styled} from 'styled-components';
import {User} from './User';
import {UserType} from '../../state/state';

type UsersPropsType = {
    usersData: UserType[]
}

export const Users: React.FC<UsersPropsType> = (props) => {

    return (
        <StyledUsers>
            {props.usersData.map(el =>
                <User key={el.id} id={el.id} name={el.name}/>)}
        </StyledUsers>
    );
};

const StyledUsers = styled.div`
`