import React from 'react';
import {Dialogs} from './Dialogs';
import {AppStateType} from '../../store/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AddMessage, UpdateNewMessageText} from '../../store/messages-reducer';

// export const DialogsContainer: React.FC<AppPropsType> = (props) => {
//     return <Dialogs usersData={props.store.getState().usersData}
//                     messagesData={props.store.getState().messagesPage.messagesData}
//                     dispatch={props.store.dispatch}
//                     currentPostValue={props.store.getState().messagesPage.currentTextareaValue}/>
// };

const mapStateToProps = (state: AppStateType) => {
    return {
        partnersData: state.partnersData,
        messagesData: state.messagesPage.messagesData,
        currentPostValue: state.messagesPage.currentTextareaValue,
        isAuth: state.authData.isAuth
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)