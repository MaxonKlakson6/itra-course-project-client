import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { FormValues } from 'src/pages/SignUp/types/formValues';
import type { ErrorResponse } from 'src/types/errorResponse';

type SignUpRequest = Omit<FormValues, 'confirm'>;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://itra-course-project.onrender.com/auth',
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<string, SignUpRequest>({
      query: (userData) => ({
        url: 'signUp',
        method: 'POST',
        body: userData,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
  }),
});

export const { useSignUpMutation } = authApi;
