import React from 'react';
import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {Profile} from '../profile/Profile';
import {Dialogs} from '../dialogs/Dialogs';
import {Route} from 'react-router-dom';

export const Content = () => {
    return (
        <StyledSection>
            <Route path="/dialogs" render={() => <Dialogs/>}/>
            <Route path="/profile" component={() => <Profile/>}/>

        </StyledSection>
    );
};

const StyledSection = styled.section`
  padding: 10px;
  background-color: ${myTheme.colors.secondary};
  border-radius: 10px;
  flex-grow: 1;
  height: calc(100vh - 70px);
  overflow: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`