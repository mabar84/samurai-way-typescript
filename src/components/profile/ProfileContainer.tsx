import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../store/redux-store';
import {connect} from 'react-redux';
import {addPost, getProfile, updateNewPostText} from '../../store/profile-reducer';
import {PostType, ProfileType} from '../../store/store';
import {Redirect} from 'react-router-dom';

export type ProfileContainerPropsType = {
    profile: ProfileType | null
    postsData: PostType[]
    currentPostValue: string
    userId: number
    isAuth: boolean
    addPost: () => void
    updateNewPostText: (text: string) => void
    getProfile: (userId: number) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        this.props.getProfile(this.props.userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postsData,
        currentPostValue: state.profilePage.currentTextareaValue,
        profile: state.profilePage.profile,
        userId: state.profilePage.userId,
        isAuth: state.authData.isAuth
    }
}

export default connect(mapStateToProps, {addPost, updateNewPostText, getProfile})(ProfileContainer)