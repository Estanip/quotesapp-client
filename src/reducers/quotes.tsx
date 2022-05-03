import { IQuotes } from '../interfaces/index';

import actions from '../actions_types';

const initialState: IQuotes = {
    average: {}
}

export function quotesReducer(state = initialState, action: any): {} {
    switch (action.type) {
        case actions.GET_AVERAGE_SUCCESS: {
            return {
                ...state,
                average: action.payload
            }
        }
        default:
            return state;
    }
};