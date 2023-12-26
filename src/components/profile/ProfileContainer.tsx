import React from 'react';
import {AppPropsType} from '../../App';
import {Profile} from './Profile';
import {AppStateType} from '../../store/redux-store';
import {Dispatch} from 'redux';
import {AddMessageAC, AddPostAC, UpdateNewMessageTextAC, UpdateNewPostTextAC} from '../../store/store';
import {connect} from 'react-redux';
import {Dialogs} from '../dialogs/Dialogs';


// export const ProfileContainer: React.FC<AppPropsType> = (props) => {
//     return <Profile postsData={props.store.getState().profilePage.postsData}
//                     currentPostValue={props.store.getState().profilePage.currentTextareaValue}
//                     dispatch={props.store.dispatch}
//     />
// };


const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postsData,
        currentPostValue: state.profilePage.currentTextareaValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessageClick: () => {
            dispatch(AddPostAC())
        },
        updateNewMessage: (text: string) => {
            dispatch(UpdateNewPostTextAC(text))
        }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)