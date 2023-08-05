import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const coinNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '2ca9aff45bmshcba9010457f9a95p130099jsn5274678557ac',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: coinNewsApiHeaders})

export const coinNewsApi = createApi({
    reducerPath: 'coinNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ( counter) =>
          createRequest(`/news/search?limit=${counter}`),
      }),
    }),
  });

export const {
    useGetCryptoNewsQuery,
} = coinNewsApi



