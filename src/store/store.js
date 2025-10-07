import {compose , createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import {persistStore , persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
//root reducer

// const persisConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'] // Add any reducers you don't want to persist here
// };

// const persistedReducer = persistReducer(persisConfig, rootReducer);

const middleWare = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const composeEnhancer = compose(process.env.NODE_ENV !== 'production'  && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWare));


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [composeEnhancers]
})
// export const persistor = persistStore(store);