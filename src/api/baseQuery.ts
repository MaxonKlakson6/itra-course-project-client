import { fetchBaseQuery } from '@reduxjs/toolkit/query';

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
