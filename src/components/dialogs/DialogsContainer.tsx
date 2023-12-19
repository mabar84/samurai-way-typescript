import React from 'react';
import {AppPropsType} from '../../App';
import {Dialogs} from './Dialogs';

export const DialogsContainer: React.FC<AppPropsType> = (props) => {
    return <Dialogs usersData={props.store.getState().usersData}
                    messagesData={props.store.getState().messagesPage.messagesData}
                    dispatch={props.store.dispatch}
                    currentPostValue={props.store.getState().messagesPage.currentTextareaValue}/>
};