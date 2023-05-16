import { apiFilmSlice } from '../../app/api/apiFilmSlice';
const key = 'add key';
const filter = `?api_key=${key}`;

export const filmsApiSlice = apiFilmSlice.injectEndpoints({
  endpoints: builder => ({
    //get Trending
    getTrending: builder.query({
      query: () => ({
        url: `/trending/movie/day${filter}`,
        method: 'GET',
      }),
    }),

    getSerials: builder.query({
      query: () => ({
        url: `/trending/tv/day${filter}`,
        method: 'GET',
      }),
    }),

    getUpcoming: builder.query({
      query: () => ({
        url: `/movie/upcoming${filter}`,
        method: 'GET',
      }),
    }),

    getMovieDetails: builder.query({
      //info == movie, serial, coming
      query: ({ movieId, info }) => ({
        url: `/${info}/${movieId}${filter}`,
        method: 'GET',
      }),
    }),

    getGalleryDetails: builder.query({
      //info == movie, serial, coming
      query: ({ movieId, info }) => ({
        url: `/${info}/${movieId}/images${filter}`,
        method: 'GET',
      }),
    }),

    getMovieCredits: builder.query({
      query: ({ movieId, info }) => ({
        url: `/${info}/${movieId}/credits${filter}`,
        method: 'GET',
      }),
    }),

    getAllFilms: builder.query({
      query: ({ info, page }) => ({
        url: `/discover/${info}${filter}&page=${page}`,
        method: 'GET',
      }),
    }),

    getAllFilmsByGenres: builder.query({
      query: ({ genreId }) => ({
        url: `/discover/movie${filter}&with_genres=${genreId}`,
        method: 'GET',
      }),
    }),

    getMovieReviews: builder.query({
      query: ({ info, movieId }) => ({
        url: `/${info}/${movieId}/reviews${filter}&language=en-US&page=1`,
        method: 'GET',
      }),
    }),

    getSearchMovies: builder.query({
      query: ({ info, query }) => ({
        url: `/search/${info}${filter}&query=${query}`,
        method: 'GET',
      }),
    }),

    getCategoriesMovies: builder.query({
      query: () => ({
        url: `/genre/movie/list${filter}`,
        method: 'GET',
      }),
    }),

    getOscars: builder.query({
      query: () => ({
        url: `/discover/movie${filter}&sort_by=popularity.desc&with_original_language=en&vote_average.gte=7&vote_count.gte=500&with_awards=true`,
        method: 'GET',
      }),
    }),

    getMovieById: builder.query({
      //info == movie, serial, coming
      query: ({ movieId, info }) => ({
        url: `/${info}/${movieId}${filter}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetSerialsQuery,
  useGetUpcomingQuery,
  useGetMovieCreditsQuery,
  useGetMovieDetailsQuery,
  useGetGalleryDetailsQuery,
  useGetMovieReviewsQuery,
  useGetSearchMoviesQuery,
  useGetAllFilmsQuery,
  useGetCategoriesMoviesQuery,
  useGetAllFilmsByGenresQuery,
  useGetOscarsQuery,
  useGetMovieByIdQuery,
} = filmsApiSlice;
