
import { combineReducers } from 'redux';
import { quotesReducer } from './quotes';

export const rootReducer = combineReducers({
    quotes: quotesReducer
});