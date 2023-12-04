import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {AppPropsType} from '../../App';
import {Profile} from '../profile/Profile';
import {Dialogs} from '../dialogs/Dialogs';
import {Settings} from '../settings/Settings';
import {Friends} from '../friends/Friends';

export const Content: React.FC<AppPropsType> = (props) => {
    return (
        <StyledSection>
            <Redirect exact from="/" to="/profile"/>
            <Route path="/profile" component={() =>
                <Profile
                    dispatch={props.dispatch}
                    currentPostValue={props.state.profilePage.currentTextareaValue}
                    postsData={props.state.profilePage.postsData}/>}/>
            <Route path="/dialogs" component={() =>
                <Dialogs currentPostValue={props.state.messagesPage.currentTextareaValue}
                         usersData={props.state.usersData}
                         messagesData={props.state.messagesPage.messagesData}
                         dispatch={props.dispatch}
                />}/>
            <Route path="/friends" render={() =>
                <Friends friendsData={props.state.friendsData}/>}/>
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
`