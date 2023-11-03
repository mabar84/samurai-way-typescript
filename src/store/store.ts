export let store = {
    _state: {
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
    addPost() {
        const newPost: PostType = {
            id: this._state.postsData.length + 1,
            post: this._state.currentTextareaValue,
            likeCount: 0
        }
        this._state.postsData.push(newPost)
        this._state.currentTextareaValue = ''
        this._callSubscriber(this._state)
    },
    addMessage() {
        const newMessage: MessageType = {
            id: this._state.messagesData.length + 1,
            message: this._state.currentTextareaValue,
            isMine: true
        }
        this._state.messagesData.push(newMessage)
        this._state.currentTextareaValue = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(text: string) {
        console.log(text)
        this._state.currentTextareaValue = text
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
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
    messagesData: MessageType[]
    usersData: UserType[]
    postsData: PostType[]
    currentTextareaValue: string
    friendsData: FriendType[]
}