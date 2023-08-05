import { configureStore } from '@reduxjs/toolkit';
import { coinrankingApi } from '../services/coinrankingApi';
import { coinNewsApi } from '../services/coinNewsApi';

export default configureStore({
    reducer:{
        [coinrankingApi.reducerPath]: coinrankingApi.reducer,
        [coinNewsApi.reducerPath]: coinNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(coinrankingApi.middleware)
      .concat(coinNewsApi.middleware),
    

});

