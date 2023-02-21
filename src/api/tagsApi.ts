import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from 'src/api/baseQuery';
import { ErrorResponse } from 'src/types/errorResponse';

export const tagsApi = createApi({
  reducerPath: 'tags',
  baseQuery,
  endpoints: (builder) => ({
    getTags: builder.query<string[], void>({
      query: () => ({
        url: 'item/tags',
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
