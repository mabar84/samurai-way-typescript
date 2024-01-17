import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../store/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AddPost, UpdateNewPostText} from '../../store/profile-reducer';

const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postsData,
        currentPostValue: state.profilePage.currentTextareaValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessageClick: () => {
            dispatch(AddPost())
        },
        updateNewMessage: (text: string) => {
            dispatch(UpdateNewPostText(text))
        }
    }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)