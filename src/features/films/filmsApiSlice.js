import { apiFilmSlice } from '../../app/api/apiFilmSlice';
const key = '0baefad249c96589623f521e924011c5';
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

    getMovieReviews: builder.query({
      query: ({ movieId }) => ({
        url: `/movie/${movieId}/reviews${filter}&language=en-US&page=1`,
        method: 'GET',
      }),
    }),

    getSearchMovies: builder.query({
      query: ({ info, query }) => ({
        url: `/search/${info}${filter}&query=${query}`,
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
} = filmsApiSlice;
