import {ActionsType, FriendType} from './store';

const initialState = [
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

export const friendsReducer = (state: FriendType[] = initialState, action: ActionsType): FriendType[] => {
    switch (action.type) {
        default:
            return state
    }
}
