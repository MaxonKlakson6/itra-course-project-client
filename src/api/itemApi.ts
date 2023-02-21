import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithCheckAuth } from 'src/api/baseQuery';
import { ItemMutationType } from 'src/pages/Profile/types/ItemMutationType';
import { ErrorResponse } from 'src/types/errorResponse';
import { Item } from 'src/types/Item';

export const itemApi = createApi({
  reducerPath: 'items',
  baseQuery: baseQueryWithCheckAuth,
  tagTypes: ['Items'],
  endpoints: (builder) => ({
    createItem: builder.mutation<string, ItemMutationType>({
      query: (body) => ({
        url: `/item`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Items', id: 'LIST' }],
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
    getAllCollectionItems: builder.query<Item[], number>({
      query: (collectionId) => ({
        url: `collection/items/${collectionId}`,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Items' as const, id })),
              { type: 'Items', id: 'LIST' },
            ]
          : [{ type: 'Items', id: 'LIST' }],
    }),
    getItem: builder.query<Item, number>({
      query: (id) => ({
        url: `item/${id}`,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
  }),
});

export const {
  useCreateItemMutation,
  useGetAllCollectionItemsQuery,
  useGetItemQuery,
} = itemApi;
