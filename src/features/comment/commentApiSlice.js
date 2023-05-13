import { apiSlice } from '../../app/api/apiSlice';

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //add comment to movie
    addComment: builder.mutation({
      query: ({ filmApiId, text }) => ({
        url: `/film-comments?film_id=${filmApiId}`,
        method: 'POST',
        body: { id: filmApiId, text },
      }),
      invalidatesTags: ['SaveFilm'],
    }),

    //delete Current Movie from list
    deleteCurrent: builder.mutation({
      query: ({ filmApiId, status }) => ({
        url: `/films/${filmApiId}/remove-from-saved?status=${status}`,
        method: 'DELETE',
        body: { apiTitleId: filmApiId },
      }),

      invalidatesTags: ['SaveFilm'],
    }),

    //get all Selected list
    getSelectedFavorite: builder.query({
      query: ({ status }) => ({
        url: `/films/get-saved?status=${status}`,
        method: 'GET',
      }),

      providesTags: ['SaveFilm'],
    }),
  }),
});

export const {
  useAddCommentMutation,
  useDeleteCurrentMutation,
  useGetSelectedFavoriteQuery,
} = commentApiSlice;
