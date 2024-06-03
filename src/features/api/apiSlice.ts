import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Endpoints } from '@/shared/constants/endpoints';
import { RootState } from '@/app/store';

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({ baseUrl: Endpoints.baseUrl, prepareHeaders: (headers, { getState }) => {
        // check token in auth state
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    }, }),
    endpoints: () => ({}),
});