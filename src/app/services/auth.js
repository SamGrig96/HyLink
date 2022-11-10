import { createCustomApi } from '../../configs/rtk-query';

export const authApi = createCustomApi({
  reducerPath: 'authApi',
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/api/Account/Login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
