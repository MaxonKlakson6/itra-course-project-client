import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithCheckAuth } from 'src/api/baseQuery';
import { User } from 'src/types/user';
import { ErrorResponse } from 'src/types/errorResponse';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithCheckAuth,
  endpoints: (builder) => ({
    getUser: builder.query<User, number>({
      query: (id) => ({
        url: `/user/${id}`,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
