import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const coinrankingApiHeaders = {
    'X-RapidAPI-Key': '2ca9aff45bmshcba9010457f9a95p130099jsn5274678557ac',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}
const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: coinrankingApiHeaders})

export const coinrankingApi = createApi({
    reducerPath: 'coinrankingApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (counter) => createRequest(`/coins?limit=${counter}`),
        })
    })

});

export const {
    useGetCryptosQuery,
} = coinrankingApi


/*const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '2ca9aff45bmshcba9010457f9a95p130099jsn5274678557ac',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };*/
