import React from 'react';
import {AppPropsType} from '../../App';
import {Profile} from './Profile';


export const ProfileContainer: React.FC<AppPropsType> = (props) => {
    return <Profile postsData={props.store.getState().profilePage.postsData}
                    currentPostValue={props.store.getState().profilePage.currentTextareaValue}
                    dispatch={props.store.dispatch}/>
};