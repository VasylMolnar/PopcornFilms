import { apiSlice } from '../../app/api/apiSlice';

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //add Comment to movie
    addComment: builder.mutation({
      query: ({ filmApiId, text }) => ({
        url: `/film-comments?film_id=${filmApiId}`,
        method: 'POST',
        body: { id: filmApiId, text },
      }),

      invalidatesTags: ['Comment'],
    }),

    //delete Current Comment
    deleteCurrentComment: builder.mutation({
      query: ({ filmApiId }) => ({
        url: `/film-comments/${filmApiId}`,
        method: 'DELETE',
        body: { apiTitleId: filmApiId },
      }),

      invalidatesTags: ['Comment'],
    }),

    //get all Comment by FILM ID
    getComment: builder.query({
      query: ({ filmApiId }) => ({
        url: `/film-comments?film_id=${filmApiId}`,
        method: 'GET',
      }),

      providesTags: ['Comment'],
    }),

    getAllFilms: builder.query({
      query: () => ({
        url: `/films`,
        method: 'GET',
      }),

      providesTags: ['Comment'],
    }),
  }),
});

export const {
  useAddCommentMutation,
  useDeleteCurrentCommentMutation,
  useGetCommentQuery,
  useGetAllFilmsQuery,
} = commentApiSlice;
