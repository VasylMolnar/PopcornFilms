import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiFilmSlice = createApi({
  reducerPath: 'apiFilmSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: builder => ({}),
});
