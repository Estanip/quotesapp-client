export interface IActions {
    GET_AVERAGE_REQUEST: string;
    GET_AVERAGE_SUCCESS: string;
    GET_QUOTES_REQUEST: string;
    GET_QUOTES_SUCCESS: string;
    GET_SLIPPAGE_REQUEST: string;
    GET_SLIPPAGE_SUCCESS: string;
};

export interface IState {
    average: IAverage;
    quotes: IQuote[];
    slippages: ISlippage[];
};

export interface IQuote {
    buy_price: number,
    sell_price: number,
    source: string;
};

export interface IAverage {
    average_sell_price:number,
    average_buy_price:number
};

export interface ISlippage {
    buy_price_slippage: number;
    sell_price_slippage: number;
    source: string;
    name: string;
};

export interface IQuotesLIst {
    name: string,
    buy_price: number,
    sell_price: number,
    buy_slippage: number,
    sell_slippage: number
};
