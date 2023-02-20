import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: '/users',
      }),
    }),
    fetchAllPosts: build.query({
      query: () => ({
        url: '/posts',
      }),
    }),
    fetchAllAlbums: build.query({
      query: () => ({
        url: '/albums',
      }),
    }),
  }),
});

export const { useFetchAllAlbumsQuery, useFetchAllPostsQuery, useFetchAllUsersQuery } = userAPI;
