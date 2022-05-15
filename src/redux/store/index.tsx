import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from '../sagas/index';
import { rootReducer } from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        reducer: rootReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
        thunk: false
      }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export default store;