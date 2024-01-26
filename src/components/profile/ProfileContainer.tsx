import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../store/redux-store';
import {connect} from 'react-redux';
import {addPost, getProfile, updateNewPostText} from '../../store/profile-reducer';
import {PostType, ProfileType} from '../../store/store';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';

export type ProfileContainerPropsType = {
    profile: ProfileType | null
    postsData: PostType[]
    currentPostValue: string
    userId: number
    addPost: () => void
    updateNewPostText: (text: string) => void
    getProfile: (userId: number) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        this.props.getProfile(this.props.userId)
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
    }
}

export default WithAuthRedirect(connect(mapStateToProps, {addPost, updateNewPostText, getProfile})(ProfileContainer))