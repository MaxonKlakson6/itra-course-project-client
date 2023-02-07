import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SignInFormValues } from 'src/pages/SignIn/types/formValues';

import type { SignUpFormValues } from 'src/pages/SignUp/types/signUpFormValues';
import type { ErrorResponse } from 'src/types/errorResponse';

type SignUpRequest = Omit<SignUpFormValues, 'confirm'>;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://itra-course-project.onrender.com/auth',
  }),
  keepUnusedDataFor: 5,
  endpoints: (builder) => ({
    signUp: builder.mutation<string, SignUpRequest>({
      query: (userData) => ({
        url: 'signUp',
        method: 'POST',
        body: userData,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
    signIn: builder.mutation<string, SignInFormValues>({
      query: (userData) => ({
        url: 'signIn',
        method: 'POST',
        body: userData,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
