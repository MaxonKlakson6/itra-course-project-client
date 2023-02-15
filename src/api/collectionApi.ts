import { createApi } from '@reduxjs/toolkit/query/react';

import { Collection } from 'src/types/collection';
import {
  ChangeCollectionRequest,
  CreateCollectionRequest,
} from 'src/types/collectionRequests';
import { baseQueryWithCheckAuth } from 'src/api/baseQuery';
import { ErrorResponse } from 'src/types/errorResponse';

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  tagTypes: ['Collections'],
  baseQuery: baseQueryWithCheckAuth,
  endpoints: (builder) => ({
    getUserCollections: builder.query<Collection[], number>({
      query: (id) => ({
        url: `user/collection/${id}`,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Collections' as const, id })),
              { type: 'Collections', id: 'LIST' },
            ]
          : [{ type: 'Collections', id: 'LIST' }],
    }),
    getCollection: builder.query<Collection, number>({
      query: (id) => ({
        url: `collection/${id}`,
      }),
      keepUnusedDataFor: 0,
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
    createCollection: builder.mutation<string, CreateCollectionRequest>({
      query: (body) => ({
        url: 'collection',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Collections', id: 'LIST' }],
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
    deleteCollection: builder.mutation({
      query: (id) => ({
        url: `collection/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Collections', id: 'LIST' }],
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
    changeCollection: builder.mutation<string, ChangeCollectionRequest>({
      query: ({ id, body }) => ({
        url: `collection/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [{ type: 'Collections', id: 'LIST' }],
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
  }),
});

export const {
  useGetUserCollectionsQuery,
  useGetCollectionQuery,
  useCreateCollectionMutation,
  useDeleteCollectionMutation,
  useChangeCollectionMutation,
} = collectionApi;
