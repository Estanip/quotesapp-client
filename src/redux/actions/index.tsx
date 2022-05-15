import actions from '../actions_types';

export const getQuotes = () => ({
    type: actions.GET_QUOTES_REQUEST
});

export const getAverage = () => ({
    type: actions.GET_AVERAGE_REQUEST
});

export const getSlippages = () => ({
    type: actions.GET_SLIPPAGE_REQUEST
});