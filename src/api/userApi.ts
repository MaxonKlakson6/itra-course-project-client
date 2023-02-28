import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithCheckAuth } from 'src/api/baseQuery';
import { User } from 'src/types/user';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithCheckAuth,
  endpoints: (builder) => ({
    getUser: builder.query<User, number>({
      query: (id) => ({
        url: `/user/${id}`,
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
