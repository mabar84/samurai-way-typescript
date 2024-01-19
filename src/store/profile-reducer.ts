import {ActionsType, ProfilePageType, ProfileType} from './store';

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
    profile: null,
    userId: 2
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, currentTextareaValue: action.newText}
        case 'ADD-POST':
            return {
                ...state,
                postsData: [...state.postsData,
                    {id: state.postsData.length + 1, post: state.currentTextareaValue, likeCount: 0}
                ],
                currentTextareaValue: ''
            }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-USER-ID':
            return {...state, userId: action.id}
        default:
            return state
    }
}

export type ProfileReducerActionsType =
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserId>

export const addPost = () => ({type: 'ADD-POST' as const})
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE' as const, profile})
export const setUserId = (id: number) => ({type: 'SET-USER-ID' as const, id})

export const updateNewPostText = (newText: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT' as const, newText})