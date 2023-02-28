import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithCheckAuth } from 'src/api/baseQuery';
import { CreateItemRequest } from 'src/pages/Profile/types/createItemRequest';
import { ErrorResponse } from 'src/types/errorResponse';
import { Item } from 'src/types/Item';
import { UpdateItemRequest } from 'src/pages/Profile/types/updateItemRequest';
import { SearchResponse } from 'src/pages/Main/types/searchResponse';

export const itemApi = createApi({
  reducerPath: 'items',
  baseQuery: baseQueryWithCheckAuth,
  tagTypes: ['Items'],
  endpoints: (builder) => ({
    getItem: builder.query<Item, number>({
      query: (id) => ({
        url: `item/${id}`,
      }),
      keepUnusedDataFor: 0,
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
      providesTags: () => [{ type: 'Items', id: 'LIST' }],
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
    getRecent: builder.query<Item[], void>({
      query: () => ({
        url: 'item/recent',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Items' as const, id })),
              { type: 'Items', id: 'LIST' },
            ]
          : [{ type: 'Items', id: 'LIST' }],
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
    search: builder.query<SearchResponse[], string>({
      query: (text) => ({
        url: `item/search/${text}`,
      }),
    }),
    createItem: builder.mutation<string, CreateItemRequest>({
      query: (body) => ({
        url: `/item`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Items', id: 'LIST' }],
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
    changeItem: builder.mutation<string, UpdateItemRequest>({
      query: ({ id, ...body }) => ({
        url: `item/${id}`,
        method: 'PATCH',
        body,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
      invalidatesTags: [{ type: 'Items', id: 'LIST' }],
    }),
    deleteItem: builder.mutation<string, string>({
      query: (id) => ({
        url: `item/${id}`,
        method: 'DELETE',
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
      invalidatesTags: [{ type: 'Items', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetItemQuery,
  useGetAllCollectionItemsQuery,
  useGetRecentQuery,
  useLazySearchQuery,
  useCreateItemMutation,
  useChangeItemMutation,
  useDeleteItemMutation,
} = itemApi;
