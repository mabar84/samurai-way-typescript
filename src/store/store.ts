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
            currentTextareaValue: '',
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
    _callSubscriber(state: StateType) {
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsType) {
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.currentTextareaValue = action.newText
            this._callSubscriber(this._state)
        }
        if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.currentTextareaValue = action.newText
            this._callSubscriber(this._state)
        }
        if (action.type == 'ADD-POST') {
            const newPost: PostType = {
                id: this._state.profilePage.postsData.length + 1,
                post: this._state.profilePage.currentTextareaValue,
                likeCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.currentTextareaValue = ''
            this._callSubscriber(this._state)
        }
        if (action.type == 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: this._state.messagesPage.messagesData.length + 1,
                message: this._state.messagesPage.currentTextareaValue,
                isMine: true
            }
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.currentTextareaValue = ''
            this._callSubscriber(this._state)
        }
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
    messagesPage: {
        currentTextareaValue: string
        messagesData: MessageType[]
    }
    profilePage: {
        currentTextareaValue: string
        postsData: PostType[]
    }
    usersData: UserType[]
    friendsData: FriendType[]
}
type StoreType = {
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
    ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)
export const UpdateNewMessageTextAC = (newText: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newText} as const)
export const AddPostAC = () => ({type: 'ADD-POST'} as const)
export const AddMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
