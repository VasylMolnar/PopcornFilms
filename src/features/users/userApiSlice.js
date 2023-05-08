import { apiSlice } from '../../app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //for user
    getUserById: builder.query({
      query: userId => ({
        url: `/users/${userId}`,
        method: 'get',
      }),

      providesTags: ['Users'],
    }),

    //for admin
    getAllUsers: builder.query({
      query: () => ({
        url: '/users',
        method: 'get',
      }),

      providesTags: (result, error, arg) => {
        return [
          ...result.map(item => {
            return { type: 'Users', id: item.id };
          }),
        ];
      },
    }),

    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/users/${userId}`,
        method: 'delete',
        body: { userId },
      }),

      invalidatesTags: ['Users'],
    }),

    //for user
    deleteCurrentUsers: builder.mutation({
      query: () => ({
        url: `/users`,
        method: 'delete',
      }),
    }),

    updateCurrentUsers: builder.mutation({
      query: credentials => ({
        url: `/users`,
        method: 'put',
        body: { ...credentials },
      }),

      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useDeleteCurrentUsersMutation,
  useUpdateCurrentUsersMutation,
} = userApiSlice;
