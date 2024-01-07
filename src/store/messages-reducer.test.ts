import {AddMessageAC} from './store';
import {messagesReducer} from './messages-reducer';

test('new post text should be added', () => {
    const startState = {
        currentTextareaValue: 'Some new message',
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
    const endState = messagesReducer(startState, AddMessageAC())

    expect(endState.currentTextareaValue).toBe('')
    expect(endState.messagesData.length).toBe(4)
    expect(endState.messagesData[3].message).toBe('Some new message')
    expect(endState.messagesData[3].id).toBe(4)
})