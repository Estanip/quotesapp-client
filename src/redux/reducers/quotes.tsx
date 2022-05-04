import { IQuotes } from '../../interfaces/index';

import actions from '../actions_types';

const initialState: IQuotes = {
    average: {},
    quotes: [],
    slippages: []
}

export function quotesReducer(state = initialState, action: any): {} {
    switch (action.type) {
        case actions.GET_AVERAGE_SUCCESS: {
            return {
                ...state,
                average: action.payload
            }
        }
        case actions.GET_QUOTES_SUCCESS: {
            return {
                ...state,
                quotes: action.payload
            }
        }
        case actions.GET_SLIPPAGE_SUCCESS: {
            return {
                ...state,
                slippages: action.payload
            }
        }
        default:
            return state;
    }
};