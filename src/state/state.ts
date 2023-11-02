import {rerenderEntireTree} from '../rerender';

export let state: StateType = {
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
}

export const addPost = (post: string) => {
    const newPost: PostType = {
        id: state.postsData.length + 1,
        post: post,
        likeCount: 0
    }
    state.postsData.push(newPost)
    rerenderEntireTree(state, addPost, addMessage, onChangeTextArea)
}

export const addMessage = (message: string) => {
    const newMessage: MessageType = {
        id: state.messagesData.length + 1,
        message: message,
        isMine: true
    }
    state.messagesData.push(newMessage)
    rerenderEntireTree(state, addPost, addMessage, onChangeTextArea)
}

export const onChangeTextArea = (text: string) => {
    state.currentTextareaValue = text
    console.log(text)
    rerenderEntireTree(state, addPost, addMessage, onChangeTextArea)
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
