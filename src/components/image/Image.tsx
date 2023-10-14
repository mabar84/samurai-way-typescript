import React from 'react';
import {styled} from 'styled-components';

export const Image = () => {
    return (
        <StyledImage
            src={'https://assets.bonappetit.com/photos/5c366551f212512d0e6cefd0/16:9/w_2560%2Cc_limit/Basically-Coffee-0219-03.jpg"'}
            alt={'coffee'}/>
    );
};

const StyledImage = styled.img`
  width: 100%;
  max-height: 100px;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 5px;
`
