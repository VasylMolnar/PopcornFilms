import { apiSlice } from '../../app/api/apiSlice';

/*
    1: Auth (logIn)
    2: Register new User
    3: LogOut
*/

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    logIn: builder.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    register: builder.mutation({
      query: credentials => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...credentials },
      }),

      invalidatesTags: ['Users'],
    }),

    logOut: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
        body: {},
      }),
    }),
  }),
});

export const {
  useLogInMutation,
  useRegisterMutation,
  useLogOutMutation,
  useRefreshTokenQuery,
} = authApiSlice;
