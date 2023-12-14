import {ActionsType, UserType} from './store';

const initialState = [
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
]

export const usersReducer = (state: UserType[] = initialState, action: ActionsType): UserType[] => {
    switch (action.type) {
        default:
            return state
    }
}
