import {ActionsType, PartnerType} from './store';

const initialState = [
    {
        id: '1',
        name: 'Petr'
    },
    {
        id: '2',
        name: 'Aramis'
    },
    {
        id: '3',
        name: 'Goofy'
    },
    {
        id: '4',
        name: 'Donatello'
    },
]

export const partnersReducer = (state: PartnerType[] = initialState, action: ActionsType): PartnerType[] => {
    switch (action.type) {
        default:
            return state
    }
}
