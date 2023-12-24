import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {AppStateType} from './redux-store';

export let store: StoreType = {
    _state: {
        messagesPage: {
            currentTextareaValue: '',
            messagesData: [
                {
                    id: 1,
                    message: 'Hi! I\'m a window specialist with great experience.',
                    isMine: false
                },
                {
                    id: 2,
                    message: 'I don\'t need to fix my window',
                    isMine: true
                },
                {
                    id: 3,
                    message: 'Do you need a barber?',
                    isMine: false
                },
            ],
        },
        profilePage: {
            postsData: [
                {
                    id: 1,
                    post: 'My first post',
                    likeCount: 22
                },
                {
                    id: 2,
                    post: 'Hello, World!',
                    likeCount: 11
                },
                {
                    id: 3,
                    post: 'I\m going to sleep',
                    likeCount: 0
                },
                {
                    id: 4,
                    post: 'This post for testing big texts. This post for testing big texts. This post for testing big texts. This post for testing big texts. This post for testing big texts. This post for testing big texts. This post for testing big texts. This post for testing big texts. ',
                    likeCount: 0
                },
            ],
            currentTextareaValue: '',
        },
        usersData: [
            {
                id: 1,
                name: 'Petr'
            }, {
                id: 2,
                name: 'Aramis'
            }, {
                id: 3,
                name: 'Goofy'
            }, {
                id: 4,
                name: 'Donatello'
            },
        ],
        friendsData: [
            {
                id: 1,
                name: 'Aine'
            },
            {
                id: 2,
                name: 'Caitlin'
            },
            {
                id: 3,
                name: 'Kyrre'
            },
            {
                id: 4,
                name: 'Rissa'
            },
            {
                id: 5,
                name: 'Sephinroth'
            },
        ]
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
    id: number
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
    usersData: UserType[]
    friendsData: FriendType[]
}
export type ProfilePageType = {
    currentTextareaValue: string
    postsData: PostType[]
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
export type ActionsType =
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof UpdateNewMessageTextAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof AddPostAC>

export const UpdateNewPostTextAC = (newText: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT' as const, newText: newText})
export const UpdateNewMessageTextAC = (newText: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT' as const, newText: newText})
export const AddPostAC = () => ({type: 'ADD-POST' as const})
export const AddMessageAC = () => ({type: 'ADD-MESSAGE' as const})
