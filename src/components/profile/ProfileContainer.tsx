import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../store/redux-store';
import {connect} from 'react-redux';
import {addPost, getProfile, getStatus, updateNewPostText} from '../../store/profile-reducer';
import {PostType, ProfileType} from '../../store/store';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

export type ProfileContainerPropsType = {
    profile: ProfileType | null
    status: string
    postsData: PostType[]
    currentPostValue: string
    userId: number
    addPost: () => void
    updateNewPostText: (text: string) => void
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        this.props.getProfile(this.props.userId)
        this.props.getStatus(this.props.userId)
    }

    render() {

        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postsData,
        currentPostValue: state.profilePage.currentTextareaValue,
        profile: state.profilePage.profile,
        userId: state.profilePage.userId,
        status: state.profilePage.status
    }
}

export default compose<ComponentType>( connect(mapStateToProps, {
    addPost,
    updateNewPostText,
    getProfile,
    getStatus
}))(ProfileContainer)
