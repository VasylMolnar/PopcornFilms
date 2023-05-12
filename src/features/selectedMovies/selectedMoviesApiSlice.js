import { apiSlice } from '../../app/api/apiSlice';

export const selectedMoviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //add movie to selected list
    addToSelected: builder.mutation({
      query: ({ filmApiId, status }) => ({
        url: `/films/${filmApiId}/add-to-saved?status=${status}`,
        method: 'POST',
        body: { apiTitleId: filmApiId },
      }),

      invalidatesTags: ['SaveFilm'],
    }),

    //delete Current Movie from list
    deleteCurrent: builder.mutation({
      query: id => ({
        url: `/films${id}`,
        method: 'DELETE',
        body: { apiTitleId: id },
      }),

      invalidatesTags: ['SaveFilm'],
    }),

    //get all Selected list
    getSelectedFavorite: builder.query({
      query: ({ status }) => ({
        url: `/films/get-saved?status=${status}`,
        method: 'GET',
      }),

      providesTags: (result, error, arg) => {
        return [
          ...result.map(item => {
            return { type: 'SaveFilm', id: item.id };
          }),
        ];
      },
    }),
  }),
});

export const {
  useAddToSelectedMutation,
  useDeleteCurrentMutation,
  useGetSelectedFavoriteQuery,
} = selectedMoviesApiSlice;
