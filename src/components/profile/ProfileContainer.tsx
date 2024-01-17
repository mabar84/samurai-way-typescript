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
    addPost: () => void
    updateNewPostText: (text: string) => void
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {

        // this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {

                console.log(res.data)
                // this.props.toggleIsFetching(false)
                this.props.setUserProfile(res.data)
                // this.props.setTotalUsersCount(res.data.totalCount)
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
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile})(ProfileContainer)