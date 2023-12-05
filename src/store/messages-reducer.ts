import {ActionsType, MessagesPageType, MessageType} from './store';

export const messagesReducer = (state: MessagesPageType, action: ActionsType): MessagesPageType => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, currentTextareaValue: action.newText}
        case 'ADD-MESSAGE': {
            const newMessage: MessageType = {
                id: state.messagesData.length + 1,
                message: state.currentTextareaValue,
                isMine: true
            }
            state.messagesData.push(newMessage)
            state.currentTextareaValue = ''
            return state
        }
        default:
            return state
    }
}