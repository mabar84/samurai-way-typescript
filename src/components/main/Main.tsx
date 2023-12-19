import React from 'react';
import {styled} from 'styled-components';
import {Content} from '../content/Content';
import {Sidebar} from '../sidebar/Sidebar';
import {AppPropsType} from '../../App';

export const Main: React.FC<AppPropsType> = (props) => {
    return (
        <StyledMain className={'container'}>
            <Sidebar/>
            <Content store={{...props.store}}/>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  display: flex;
  align-items: start;
  gap: 10px;
  margin: 10px auto;
  flex-grow: 1;
`