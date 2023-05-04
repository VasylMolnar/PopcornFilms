import { apiSlice } from '../../app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //Get User Data by User Email
    getUserByEmail: builder.query({
      query: userId => ({
        url: `/users/${userId}`,
        method: 'get',
      }),

      providesTags: ['Users'],
    }),

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

      invalidatesTags: (result, error, arg) => {
        console.log(result);
        if (result.roles.includes('5150')) {
          //Admin
          return [{ type: 'Users', id: arg.id }];
        }
      },
    }),
  }),
});

export const { useGetUserByEmailQuery, useGetAllUsersQuery, useDeleteUserMutation } =
  userApiSlice;
