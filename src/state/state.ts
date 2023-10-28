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
    ]
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
export type StateType = {
    messagesData: MessageType[]
    usersData: UserType[]
    postsData: PostType[]
}
