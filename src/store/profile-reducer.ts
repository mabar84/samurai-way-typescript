import {ActionsType, PostType, ProfilePageType} from './store';

export const profileReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, currentTextareaValue: action.newText}
        case 'ADD-POST': {
            const newPost: PostType = {
                id: state.postsData.length + 1,
                post: state.currentTextareaValue,
                likeCount: 0
            }
            state.postsData.push(newPost)
            state.currentTextareaValue = ''
            return state
        }
        default:
            return state
    }
}
