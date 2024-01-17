import {AddPost, profileReducer} from './profile-reducer';

test('new post text should be added', () => {
    const startState = {
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
        currentTextareaValue: 'Some new post',
    }
    const endState = profileReducer(startState, AddPost())

    expect(endState.currentTextareaValue).toBe('')
    expect(endState.postsData.length).toBe(5)
    expect(endState.postsData[4].post).toBe('Some new post')
    expect(endState.postsData[4].id).toBe(5)
})