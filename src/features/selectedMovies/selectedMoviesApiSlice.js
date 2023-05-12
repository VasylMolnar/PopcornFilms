import { apiSlice } from '../../app/api/apiSlice';

export const selectedMoviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    //add movie to selected list
    addToSelected: builder.mutation({
      query: id => ({
        url: '/api/films',
        method: 'POST',
        body: { apiTitleId: id },
      }),

      invalidatesTags: ['SaveFilm'],
    }),

    //delete Current Movie from list
    deleteCurrent: builder.mutation({
      query: id => ({
        url: `/api/films${id}`,
        method: 'DELETE',
        body: { apiTitleId: id },
      }),

      invalidatesTags: ['SaveFilm'],
    }),

    //get all Selected list
    getSelectedFavorite: builder.query({
      query: () => ({
        url: '/api/films/get-saved?status=FAVOURITE',
        method: 'GET',
      }),

      // transformResponse: response => {
      //   console.log('response', response);
      // },

      // providesTags: (result, error, arg) => {
      //   console.log(result, arg, error);
      //   return [
      //     ...result.map(item => {
      //       return { type: 'SaveFilm', id: item.id };
      //     }),
      //   ];
      // },
    }),
  }),
});

export const {
  useAddToSelectedMutation,
  useDeleteCurrentMutation,
  useGetSelectedFavoriteQuery,
} = selectedMoviesApiSlice;
