import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithCheckAuth } from 'src/api/baseQuery';
import { User } from 'src/types/user';
import { ErrorResponse } from 'src/types/errorResponse';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  tagTypes: ['Users'],
  baseQuery: baseQueryWithCheckAuth,
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: 'admin/users',
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    deleteUser: builder.mutation<string, number>({
      query: (id) => ({
        url: `/admin/user/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
    toggleBlockUser: builder.mutation<string, number>({
      query: (id) => ({
        url: `/admin/block-status/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
    makeAdmin: builder.mutation<string, number>({
      query: (id) => ({
        url: `admin/make-admin/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useToggleBlockUserMutation,
  useMakeAdminMutation,
} = adminApi;
