import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {Profile} from '../profile/Profile';
import {Dialogs} from '../dialogs/Dialogs';
import {Settings} from '../settings/Settings';
import {AppPropsType} from '../../App';

export const Content: React.FC<AppPropsType> = (props) => {
    return (
        <StyledSection>
            <Redirect exact from="/" to="/profile"/>
            <Route path="/profile" component={() =>
                <Profile postsData={props.state.postsData}/>}/>
            <Route path="/dialogs" component={() =>
                <Dialogs usersData={props.state.usersData} messagesData={props.state.messagesData}/>}/>
            <Route path="/settings" render={() =>
                <Settings/>}/>
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

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${myTheme.colors.primary};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-button {
    height: 8px;
  }


`