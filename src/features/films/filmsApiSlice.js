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

    getMovieCredits: builder.query({
      query: ({ movieId }) => ({
        url: `/movie/${movieId}/credits${filter}&language=en-US`,
        method: 'GET',
      }),
    }),

    getMovieDetails: builder.query({
      query: ({ movieId }) => ({
        url: `/movie/${movieId}${filter}&language=en-US`,
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
      query: ({ query, page = 1 }) => ({
        url: `/search/movie${filter}&query=${query}&language=en-US&page=${page}&include_adult=false`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetMovieCreditsQuery,
  useGetMovieDetailsQuery,
  useGetMovieReviewsQuery,
  useGetSearchMoviesQuery,
} = filmsApiSlice;
