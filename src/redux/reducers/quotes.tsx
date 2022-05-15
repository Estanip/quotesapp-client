import { IState} from '../../interfaces/index';

import actions from '../actions_types';

const initialState: IState = {
    average: {
        average_sell_price: 0,
        average_buy_price: 0
    },
    quotes: [],
    slippages: []
};

export function quotesReducer(state = initialState, action: { type: string; payload: any; }): {} {
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