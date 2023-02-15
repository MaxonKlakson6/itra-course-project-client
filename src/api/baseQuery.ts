import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import { resetAuthState } from 'src/store/reducers/authSlice';

import type { RootState } from 'src/types/reduxTypes';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://itra-course-project-server-production.up.railway.app',
  mode: 'cors',
  credentials: 'same-origin',
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
      headers.set('Content-Type', 'application/json');
    }

    return headers;
  },
});

export const baseQueryWithCheckAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    localStorage.clear();
    api.dispatch(resetAuthState());
  }
  return result;
};
