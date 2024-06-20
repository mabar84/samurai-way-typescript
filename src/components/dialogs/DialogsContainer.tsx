import React, {ComponentType} from 'react';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../store/redux-store';
import {compose, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AddMessage, UpdateNewMessageText} from '../../store/messages-reducer';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';

const mapStateToProps = (state: AppStateType) => {
    return {
        partnersData: state.partnersData,
        messagesData: state.messagesPage.messagesData,
        currentPostValue: state.messagesPage.currentTextareaValue,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessageClick: () => {
            dispatch(AddMessage())
        },
        updateNewMessage: (text: string) => {
            dispatch(UpdateNewMessageText(text))
        }
    }
}

export const DialogsContainer = compose<ComponentType>( connect(mapStateToProps, mapDispatchToProps))(Dialogs)
