import React from 'react';
import {styled} from 'styled-components';
import {Partner} from './Partner';
import {PartnerType} from '../../store/store';

type UsersPropsType = {
    usersData: PartnerType[]
}

export const Partners: React.FC<UsersPropsType> = (props) => {

    return (
        <StyledUsers>
            {props.usersData.map(el =>
                <Partner key={el.id} id={el.id} name={el.name}/>)}
        </StyledUsers>
    );
};

const StyledUsers = styled.div`
`