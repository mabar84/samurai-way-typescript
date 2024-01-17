import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../store/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AddPost, UpdateNewPostText} from '../../store/profile-reducer';
import {PostType, UserType} from '../../store/store';
import axios from 'axios';
import {Users} from '../users/Users';


type ProfileContainerPropsType = {
    postsData: PostType[]
    currentPostValue: string
    sendMessageClick: () => void
    updateNewMessage: (text: string) => void
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {


    render() {
        return <Profile
            postsData={this.props.postsData}
            currentPostValue={this.props.currentPostValue}
            addPost={this.props.sendMessageClick}
            updateNewPostText={this.props.updateNewMessage}
        />
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)