import {ActionsType, UserType} from './store';

const initialState: UserType[] = [
    {
        id: '1',
        name: 'Dima 1',
        status: 'ok',
        followed: true,
        photos: {
            small: 'https://avatars.akamai.steamstatic.com/b6a9e86053fc4a7d906c199a8535563d00a2df07_medium.jpg',
            large: ''
        }
    },
    {
        id: '2',
        name: 'Dima 2',
        status: 'okokokokkokok',
        followed: true,
        photos: {
            small: 'https://avatars.akamai.steamstatic.com/b6a9e86053fc4a7d906c199a8535563d00a2df07_medium.jpg',
            large: ''
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
        case 'SET-USERS': {
            return {...action.users}
        }
        default:
            return state
    }
}
