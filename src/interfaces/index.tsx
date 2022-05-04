export interface IActions {
    GET_AVERAGE_REQUEST: string;
    GET_AVERAGE_SUCCESS: string;
    GET_QUOTES_REQUEST: string;
    GET_QUOTES_SUCCESS: string;
    GET_SLIPPAGE_REQUEST: string;
    GET_SLIPPAGE_SUCCESS: string;
};

export interface IQuotes {
    average: {};
    quotes: [];
    slippages: [];
}