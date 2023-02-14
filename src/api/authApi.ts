import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from 'src/api/baseQuery';
import { SignInFormValues } from 'src/pages/SignIn/types/formValues';
import { UserData } from 'src/types/userData';

import type { SignUpFormValues } from 'src/pages/SignUp/types/signUpFormValues';
import type { ErrorResponse } from 'src/types/errorResponse';

type SignUpRequest = Omit<SignUpFormValues, 'confirm'>;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  keepUnusedDataFor: 5,
  endpoints: (builder) => ({
    signUp: builder.mutation<string, SignUpRequest>({
      query: (userData) => ({
        url: 'auth/signUp',
        method: 'POST',
        body: userData,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
    signIn: builder.mutation<UserData, SignInFormValues>({
      query: (userData) => ({
        url: 'auth/signIn',
        method: 'POST',
        body: userData,
      }),
      transformErrorResponse: (response: ErrorResponse) => response.data.error,
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
