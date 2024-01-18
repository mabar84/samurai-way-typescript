import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../store/redux-store';
import {connect} from 'react-redux';
import {addPost, setUserProfile, updateNewPostText} from '../../store/profile-reducer';
import {PostType, ProfileType} from '../../store/store';
import axios from 'axios';

export type ProfileContainerPropsType = {
    profile: ProfileType | null
    postsData: PostType[]
    currentPostValue: string
    userId: number
    addPost: () => void
    updateNewPostText: (text: string) => void
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
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
        userId: state.profilePage.userId
    }
}

export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile})(ProfileContainer)