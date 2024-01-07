import {ActionsType, MessagesPageType} from './store';

const initialState = {
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
}

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionsType): MessagesPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, currentTextareaValue: action.newText}
        case 'ADD-MESSAGE': {
            return {
                ...state,
                messagesData: [...state.messagesData,
                    {id: state.messagesData.length + 1, message: state.currentTextareaValue, isMine: true}],
                currentTextareaValue: ''
            }
        }
        default:
            return state
    }
}