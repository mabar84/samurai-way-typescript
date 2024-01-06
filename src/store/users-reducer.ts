import {ActionsType, UserType} from './store';

const initialState = [
    {
        id: '1',
        name: 'Petr',
        followed: true,
        status: 'ok',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },
    {
        id: '2',
        name: 'Aramis',
        followed: true,
        status: 'ok',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },
    {
        id: '3',
        name: 'Goofy',
        followed: false,
        status: 'ok',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },
    {
        id: '4',
        name: 'Donatello',
        followed: true,
        status: 'ok',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    },
]

export const usersReducer = (state: UserType[] = initialState, action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'FOLLOW': {
            return state.map((u) => u.id === action.userId ? {...u, followed: true} : u)
        }
        case 'UNFOLLOW': {
            return state.map((u) => u.id === action.userId ? {...u, followed: false} : u)
        }
        default:
            return state
    }
}
