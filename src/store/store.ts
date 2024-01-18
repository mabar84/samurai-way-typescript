import {profileReducer, ProfileReducerType} from './profile-reducer';
import {messagesReducer, MessagesReducerType} from './messages-reducer';
import {AppStateType} from './redux-store';
import {UsersReducerType} from './users-reducer';

export let store: StoreType = {
    _state: {
        messagesPage: {
            currentTextareaValue: '',
            messagesData: [],
        },
        profilePage: {
            postsData: [],
            currentTextareaValue: '',
            profile: null,
            userId: 404
        },
        usersPage: {
            usersData: [],
            pageSize: 5,
            totalUsersCount: 25,
            currentPage: 1,
            isFetching: true
        },
        friendsData: [],
        partnersData: []
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: AppStateType) {
    },
    subscribe(observer: (state: AppStateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    }
}

export type MessageType = {
    id: number
    message: string
    isMine: boolean
}
export type UserType = {
    id: string
    name: string
    status: string
    followed: boolean
    photos: {
        small: string
        large: string
    }

}
export type PartnerType = {
    id: string
    name: string
}
export type PostType = {
    id: number
    post: string
    likeCount: number
}
export type FriendType = {
    id: number
    name: string
}
export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
    usersPage: UsersPageType
    friendsData: FriendType[]
    partnersData: PartnerType[]
}
export type UsersPageType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type ProfilePageType = {
    currentTextareaValue: string
    postsData: PostType[]
    profile: null | ProfileType
    userId: number
}
export type MessagesPageType = {
    currentTextareaValue: string
    messagesData: MessageType[]
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (callback: (state: StateType) => void) => void
    dispatch: (action: ActionsType) => void
}
export type ProfileType = {
    aboutMe: string;
    contacts: {
        facebook: string | null;
        website: string | null;
        vk: string | null;
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string | null;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: {
        small: string;
        large: string;
    };
}


export type ActionsType =
    | MessagesReducerType
    | ProfileReducerType
    | UsersReducerType