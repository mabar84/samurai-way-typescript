import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import styled from 'styled-components';
import {myTheme} from '../../styles/Theme.styled';
import {Settings} from '../settings/Settings';
import {Friends} from '../friends/Friends';
import {ProfileContainer} from '../profile/ProfileContainer';
import {DialogsContainer} from '../dialogs/DialogsContainer';
// import StoreContext from '../../StoreContext';

export const Content = () => {
    return (
        <StyledSection>
            <Redirect exact from="/" to="/profile"/>
            <Route path="/profile" component={() =>
                <ProfileContainer/>}/>
            <Route path="/dialogs" component={() =>
                <DialogsContainer/>}/>
            {/*<Route path="/friends" render={() =>*/}
            {/*    <Friends friendsData={state.friendsData}/>}/>*/}
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