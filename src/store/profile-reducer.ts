import {ActionsType, ProfilePageType} from './store';

const initialState = {
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
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, currentTextareaValue: action.newText}
        case 'ADD-POST': {
            return {
                ...state,
                postsData: [...state.postsData,
                    {id: state.postsData.length + 1, post: state.currentTextareaValue, likeCount: 0}
                ],
                currentTextareaValue: ''
            }
        }
        default:
            return state
    }
}

export type ProfileReducerType =
    | ReturnType<typeof UpdateNewPostText>
    | ReturnType<typeof AddPost>

export const AddPost = () => ({type: 'ADD-POST' as const})
export const UpdateNewPostText = (newText: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT' as const, newText: newText})